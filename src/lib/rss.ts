export interface BlogPost {
  title: string;
  url: string;
  pubDate: Date;
  description?: string;
  source: string;
}

// Import the XML parser for Node.js environment
import { XMLParser } from 'fast-xml-parser';

export async function fetchRSSFeed(url: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`Failed to fetch RSS feed: ${url}`);
      return [];
    }
    
    const xmlText = await response.text();
    
    // Configure the XML parser
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
      textNodeName: '#text',
      parseAttributeValue: true,
      trimValues: true
    });
    
    const xmlDoc = parser.parse(xmlText);
    
    // Handle different RSS feed structures
    let items = [];
    if (xmlDoc.rss?.channel?.item) {
      items = Array.isArray(xmlDoc.rss.channel.item) 
        ? xmlDoc.rss.channel.item 
        : [xmlDoc.rss.channel.item];
    } else if (xmlDoc.feed?.entry) {
      // Handle Atom feeds
      items = Array.isArray(xmlDoc.feed.entry) 
        ? xmlDoc.feed.entry 
        : [xmlDoc.feed.entry];
    }
    
    const posts: BlogPost[] = [];
    
    // Extract source name from URL
    const sourceUrl = new URL(url);
    const source = sourceUrl.hostname.replace('www.', '');
    
    // Add this helper function at the top of the file, after the imports
    function decodeHtmlEntities(text: string): string {
      const entities: { [key: string]: string } = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&apos;': "'",
        '&#8217;': "'",
        '&#8216;': "'",
        '&#8220;': '"',
        '&#8221;': '"',
        '&#8211;': '–',
        '&#8212;': '—',
        '&#8230;': '…'
      };
      
      return text.replace(/&[#\w]+;/g, (entity) => {
        return entities[entity] || entity;
      });
    }
    
    // In the fetchRSSFeed function, update the title processing:
    items.forEach((item: any) => {
      let title, link, pubDateText, description;
      
      // Handle RSS format
      if (item.title && item.link) {
        title = typeof item.title === 'string' ? item.title : item.title['#text'] || item.title;
        link = typeof item.link === 'string' ? item.link : item.link['#text'] || item.link;
        pubDateText = item.pubDate || item.published;
        description = item.description || item.summary;
      }
      // Handle Atom format
      else if (item.title && item.link) {
        title = typeof item.title === 'string' ? item.title : item.title['#text'] || item.title;
        link = item.link?.['@_href'] || item.link;
        pubDateText = item.published || item.updated;
        description = item.summary || item.content;
      }
      
      if (title && link && pubDateText) {
        const pubDate = new Date(pubDateText);
        if (!isNaN(pubDate.getTime())) {
          posts.push({
            title: decodeHtmlEntities(String(title).trim()),
            url: String(link).trim(),
            pubDate,
            description: description ? decodeHtmlEntities(String(description).trim()) : undefined,
            source
          });
        }
      }
    });
    
    return posts;
  } catch (error) {
    console.warn(`Error fetching RSS feed ${url}:`, error);
    return [];
  }
}

export async function fetchAllRSSFeeds(feedUrls: string[], maxPosts: number = 25): Promise<BlogPost[]> {
  const allPosts: BlogPost[] = [];
  
  // Fetch all feeds concurrently with timeout and error handling
  const feedPromises = feedUrls.map(url => 
    Promise.race([
      fetchRSSFeed(url),
      new Promise<BlogPost[]>((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), 10000)
      )
    ]).catch(() => [])
  );
  
  const feedResults = await Promise.all(feedPromises);
  
  // Combine all posts
  feedResults.forEach(posts => {
    allPosts.push(...posts);
  });
  
  // Sort by publication date (newest first) and limit
  return allPosts
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime())
    .slice(0, maxPosts);
}