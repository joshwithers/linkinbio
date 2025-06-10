# Josh's Link in Bio Astro Theme

A modern, customisable link-in-bio theme built with Astro and Tailwind CSS. Created by Josh Withers for personal branding and professional networking.

Lightly adapted from Trevor Tyler Lee's [Treelink](https://treelink.app) app.

## 🎨 About This Theme

My link in bio Astro website is a clean, professional theme designed for creators, entrepreneurs, and professionals who want a centralised hub for their online presence. The theme focuses on simplicity, performance, and customisation.

I built it because I wanted a really fast and fun bio link that sends people to my social accounts, websites and blog posts.

You'd click a link in bio on Instagram and between the social media app's in-built browser being slow, internet being slow, and everything just being harder, the page would also be slow.

![Website preview on mobile [⌘](https://ik.imagekit.io/withers/Website_preview_on_mobile_4wJ5wE4X0)](https://ik.imagekit.io/withers/Website_preview_on_mobile_4wJ5wE4X0)

![Safari web preview [⌘](https://ik.imagekit.io/withers/Safari_web_preview_Gzd4OdPJm1)](https://ik.imagekit.io/withers/Safari_web_preview_Gzd4OdPJm1)

I built this to be fast, not just fast loading, but fast to get into and then equally as fast to get out of. There's no blog collections, no tracking, minimal scripting and CSS, and people smarter than me could probably make it faster.

![Pagespeed Insights of the link in bio website [⌘](https://ik.imagekit.io/withers/pagespeed-insights-linkinbio_z7L1cGBuc)](https://ik.imagekit.io/withers/pagespeed-insights-linkinbio_z7L1cGBuc)

### Theme Features

- **Responsive Design**: Looks great on all devices with mobile-first approach
- **Dark/Light Mode**: Automatic theme switching with manual override options
- **Icon Integration**: Support for hundreds of social media and service icons via Iconify
- **RSS Feed Integration**: Display recent blog posts from external RSS feeds
- **SEO Optimised**: Built-in meta tags, Open Graph images, and structured data
- **Performance Focused**: Achieves perfect 100/100/100/100 web vitals scores usually, with a few edge cases getting close to 100 because of the mirroring effect causing a non-problem accessibility issue.
- **Customisable Links**: Support for both icon-based and custom text links
- **Professional Branding**: Clean typography and professional layout

## 🚀 Getting Started

### Quick Start

```bash
# Clone or download this repository
git clone [your-repo-url]
cd josh-link-in-bio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Configuration

The theme is configured through the `src/siteConfig.json` file. Here's what you can customise:

## Quick Start Checklist

1. ✅ Replace profile picture in `/src/assets/`
2. ✅ Update `name`, `bio`, and `url`
3. ✅ customise the `about` section
4. ✅ Set your contact `email`
5. ✅ Update social media `iconLinks`
6. ✅ Add your projects to `customLinks`
7. ✅ Configure RSS feeds in `recentPosts` (or disable)
8. ✅ Update schema.org data for SEO
9. ✅ Remove or customise `referralLinks`
10. ✅ Test your changes locally

## 🧞 Commands

All commands are run from the root of the project:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321` |
| `npm run build`   | Build your production site to `./dist/`     |
| `npm run preview` | Preview your build locally, before deploying|

## 🚀 Deployment

This theme works with any static hosting provider:

- **Netlify**: Connect your Git repository for automatic deployments
- **Vercel**: Import your project for instant deployment
- **GitHub Pages**: Use the included GitHub Actions workflow
- **Cloudflare Pages**: Connect your repository for edge deployment

## 📈 Performance

This theme is optimized for performance:

- **Lighthouse Scores**: 100/100/100/100 (Performance, Accessibility, Best Practices, SEO)
- **Static Generation**: Pre-built pages for fast loading
- **Optimised Images**: Automatic image optimization with Astro
- **Minimal JavaScript**: Only essential JS for theme switching
- **RSS Caching**: Efficient RSS feed caching and generation

## 🛠️ Technical Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Iconify](https://iconify.design/)** - Icon system with thousands of icons
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **RSS Integration** - Built-in RSS feed parsing and generation.

# SiteConfig.json Customisation Guide

This guide will help you customise the `siteConfig.json` file to personalise your link-in-bio website. The configuration file controls all the content and settings for your personal website.

## Required Assets

Before customising the config, make sure you have:
- **Profile Picture**: Replace `/src/assets/profile-picture.webp` with your own image (keep the same filename)

## Configuration Sections

### 1. Basic Information

```json
{
  "name": "Your Full Name",
  "bio": "A short bio that appears prominently on your site and is also used as the meta-description. Keep it to 110-160 characters.",
  "url": "https://yourdomain.com"
}
```

**Fields to customise:**
- `name`: Your full name as you want it displayed
- `bio`: A brief, engaging description of yourself (1-2 sentences, 110-160 characters.)
- `url`: Your website's primary URL

### 2. About Section

```json
"about": {
  "title": "About [Your Name]",
  "content": "A longer description of who you are, what you do, and what makes you unique. This appears in a dedicated about section."
}
```

**Customisation tips:**
- Keep the title format consistent: "About [Your Name]"
- Write 2-3 sentences that capture your personality and work
- Use a conversational tone that matches your brand
- This is displayed towards the bottom of the page and can be a more in-depth bio.

### 3. Contact Information

```json
"contact": {
  "email": "your@email.com",
  "ctaTitle": "GET IN TOUCH!"
}
```

**Fields to customise:**
- `email`: Your primary contact email
- `ctaTitle`: Call-to-action text for contact button (keep it energetic!)

### 4. Profile Picture

```json
"profilePicture": "/profile-picture.webp"
```

**To customise:**
1. Replace the file at `/src/assets/profile-picture.webp` with your image
2. Keep the same filename and format (.webp recommended for performance)
3. Recommended size: 256x256px, square aspect ratio

### 5. Footer Barcode (Optional)

```json
"footer": {
  "barcode": {
    "src": "/barcode.png",
    "alt": "Barcode",
    "width": 200,
    "height": 50
  }
}
```

**To customise:**
- Replace `/public/barcode.png` with your own image, or
- [barcodesinc.com/generator](ttps://www.barcodesinc.com/generator) is what I used to generate mine.

### 6. Recent Posts (RSS Feeds)

```json
"recentPosts": {
  "enabled": true,
  "count": 30,
  "feeds": [
    "https://yourblog.com/rss",
    "https://anotherblog.com/feed.xml"
  ]
}
```

**To customise:**
- Set `enabled` to `false` if you don't want to show recent posts
- Adjust `count` for how many posts from across the feeds, in total, to display
- Replace the `feeds` array with your own RSS feed URLs
- Remove feeds you don't want to include

### 7. Social Media Icons

```json
"iconLinks": [
  {
    "icon": "simple-icons:instagram",
    "url": "https://instagram.com/yourusername"
  },
  {
    "icon": "simple-icons:youtube",
    "url": "https://youtube.com/@yourusername"
  }
]
```

**Available icons:** Check the `/src/icons/` folder for available icons, or use Simple Icons format (`simple-icons:platform`)

**To customise:**
- Replace URLs with your own social media profiles
- Add or remove platforms as needed
- For custom icons, add the SVG file to `/src/icons/` and reference by filename

### 8. Custom Links

```json
"customLinks": [
  {
    "title": "🚀 My Main Project",
    "url": "https://yourproject.com"
  },
  {
    "title": "📝 My Blog",
    "url": "https://yourblog.com"
  }
]
```

**customisation tips:**
- Use emojis to make links more visually appealing
- Order links by importance (most important first)
- Keep titles concise but descriptive

### 9. Referral Links (Optional)

```json
"referralLinks": [
  {
    "title": "10% off Service Name",
    "url": "https://service.com/ref/yourcode"
  }
]
```

**To customise:**
- Add your referral links for services you recommend
- Include the discount/benefit in the title
- Remove this section entirely if you don't want referral links
- these links are published on the save.astro page at /save

## Tips for Success

- **Keep it authentic**: Write in your own voice
- **Test locally**: Make sure your JSON is valid
- **Optimise images**: Use WebP format for better performance
- **Update regularly**: Keep your links and information current
- **Automated RSS Updates**: To keep your RSS feeds fresh while maintaining a static, fast website, you can set up automated rebuilds using Cloudflare Pages deploy hooks triggered by GitHub Actions. Here's how:

  1. **Set up Cloudflare Pages Deploy Hook**:
     - Go to your Cloudflare Pages dashboard
     - Navigate to your project settings
     - Find "Build & deployments" → "Deploy hooks"
     - Create a new deploy hook and copy the webhook URL

  2. **Configure GitHub Secrets**:
     - In your GitHub repository, go to Settings → Secrets and variables → Actions
     - Add a new repository secret named `CF_PAGES_WEBHOOK_URL`
     - Paste your Cloudflare deploy hook URL as the value

  3. **Customize the Schedule**:
     - Edit the cron schedule in /.github/workflows/scheduled-rss-build.yml
     - The current setup rebuilds 3 times daily (6 AM, 2 PM, 10 PM Hobart time)
     - Adjust the cron expressions to match your preferred update frequency

  This approach keeps your site static and lightning-fast while ensuring RSS content stays current without manual intervention.

## 📄 License

This project is licensed under CC0 1.0 - see the LICENSE file for details.

## 👨‍💻 Created By

**Josh Withers**  
Wedding Celebrant & Web Developer  
[josh@withers.co](mailto:josh@withers.co)  
[joshwithers.com.au](https://joshwithers.com.au)

---

*Built with ❤️ using Astro and modern web technologies*