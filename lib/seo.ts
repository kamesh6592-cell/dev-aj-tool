import { Metadata } from "next";

interface SEOParams {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}

export function generateSEO({
  title = "DeepSite | Build with AI ✨",
  description = "DeepSite is a web development tool that helps you build websites with AI, no code required. Let's deploy your website with DeepSite and enjoy the magic of AI.",
  path = "",
  image = "/banner.png",
  noIndex = false,
  canonical,
}: SEOParams = {}): Metadata {
  const baseUrl = "https://huggingface.co/deepsite";
  const fullUrl = `${baseUrl}${path}`;
  const canonicalUrl = canonical || fullUrl;
  
  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex 
      ? { 
          index: false, 
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          }
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          }
        },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "DeepSite",
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: `${title} - DeepSite`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}${image}`],
      creator: "@deepsite",
    },
    other: {
      // Control how the page appears when shared
      'og:image:secure_url': `${baseUrl}${image}`,
      // Help search engines understand the primary URL
      'rel': 'canonical',
    },
  };
}

export function generateStructuredData(type: 'WebApplication' | 'Organization' | 'Article', data: any) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  switch (type) {
    case 'WebApplication':
      return {
        ...baseStructuredData,
        name: 'DeepSite',
        description: 'Build websites with AI, no code required',
        url: 'https://huggingface.co/deepsite',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        creator: {
          '@type': 'Organization',
          name: 'DeepSite',
          url: 'https://huggingface.co/deepsite',
        },
        ...data,
      };
    
    case 'Organization':
      return {
        ...baseStructuredData,
        name: 'DeepSite',
        url: 'https://huggingface.co/deepsite',
        logo: 'https://huggingface.co/deepsite/logo.svg',
        description: 'AI-powered web development platform',
        sameAs: [
          // Add social media links here if available
        ],
        ...data,
      };
    
    default:
      return { ...baseStructuredData, ...data };
  }
}
