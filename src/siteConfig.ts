import siteConfigJson from "./siteConfig.json";

interface IconLink {
  icon: string;
  url: string;
}

interface CustomLink {
  title: string;
  url: string;
}

interface ReferralLink {
  title: string;
  url: string;
}

export interface SiteConfiguration {
  name: string;
  bio: string;
  about: {
    title: string;
    content: string;
  };
  contact: {
    email: string;
    ctaTitle: string;
  };
  footer: {
    barcode: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  url: string;
  recentPosts?: {
    enabled: boolean;
    count: number;
    feeds: string[];
  };
  iconLinks: IconLink[];
  customLinks: CustomLink[];
  referralLinks: {
    enabled: boolean;
    links: ReferralLink[];
  };
}

export const SITE: SiteConfiguration = {
  ...siteConfigJson,
};
