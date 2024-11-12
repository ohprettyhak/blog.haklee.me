import React from 'react';

import { useSiteMetadata } from '@/hooks/useSiteMetadata';

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  slug?: string;
  publishDate?: string;
  modifiedDate?: string;
  keywords?: string[];
  draft?: boolean;
};

const SEO = ({
  title,
  description,
  image,
  article = false,
  slug,
  publishDate,
  modifiedDate,
  keywords = [],
  draft = false,
}: SEOProps) => {
  const {
    title: defaultTitle,
    author,
    description: defaultDescription,
    siteUrl,
    thumbnail,
  } = useSiteMetadata();

  const metaTitle = title ? `${title} – ${defaultTitle}` : defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaImage = `${siteUrl}${image || thumbnail}`;
  const metaType = article ? 'article' : 'website';
  const metaUrl = slug ? `${siteUrl}/${slug}` : siteUrl;

  const metaTags = [
    { name: 'description', content: metaDescription },
    { name: 'keywords', content: keywords.join(', ') },
    { name: 'author', content: author },
    { property: 'og:type', content: metaType },
    { property: 'og:title', content: metaTitle },
    { property: 'og:description', content: metaDescription },
    { property: 'og:image', content: metaImage },
    { property: 'og:image:alt', content: 'semantic' },
    { property: 'og:url', content: metaUrl },
    { property: 'og:site_name', content: defaultTitle },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:description', content: metaDescription },
    { name: 'twitter:image', content: metaImage },
    { name: 'twitter:image:alt', content: 'semantic' },
    { name: 'twitter:site', content: '@YourSiteTwitterHandle' },
    { name: 'twitter:creator', content: '@AuthorTwitterHandle' },
    { property: 'article:published_time', content: publishDate },
    { property: 'article:modified_time', content: modifiedDate },
    { property: 'article:author', content: author },
  ];

  if (draft) metaTags.push({ name: 'robots', content: 'noindex, nofollow' });

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/assets/favicon/favicon.svg" />
      <link rel="icon" type="image/png" href="/assets/favicon/favicon.png" />
      <title>{metaTitle}</title>
      {metaTags.map((tag, index) =>
        tag.name ? (
          <meta key={index} name={tag.name} content={tag.content} />
        ) : (
          <meta key={index} property={tag.property} content={tag.content} />
        ),
      )}
    </>
  );
};

export default SEO;
