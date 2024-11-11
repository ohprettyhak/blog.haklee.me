import React from 'react';

import { useSiteMetadata } from '@/hooks/useSiteMetadata';

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
};

const SEO = ({ title, description, image, article = false }: SEOProps) => {
  const { title: siteTitle, author, description: siteDescription, siteUrl } = useSiteMetadata();

  const metaTitle = title ? `${title} – ${siteTitle}` : siteTitle;
  const metaDescription = description || siteDescription;
  const metaImage = image ? `${siteUrl}${image}` : `${siteUrl}/assets/images/thumbnail.png`;
  const metaType = article ? 'article' : 'website';

  return (
    <>
      <link key="icon-svg" rel="icon" type="image/svg+xml" href="/assets/favicon/favicon.svg" />
      <link key="icon-png" rel="icon" type="image/png" href="/assets/favicon/favicon.png" />

      <title key={metaTitle}>{metaTitle}</title>
      <meta key="meta-description" name="description" content={metaDescription} />
      <meta key="meta-author" name="author" content={author} />

      <meta key="og-type" property="og:type" content={metaType} />
      <meta key="og-title" property="og:title" content={metaTitle} />
      <meta key="og-description" property="og:description" content={metaDescription} />
      <meta key="og-image" property="og:image" content={metaImage} />
      <meta key="og-image-alt" property="og:image:alt" content="semantic" />

      <meta key="twitter-card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter-title" name="twitter:title" content={metaTitle} />
      <meta key="twitter-description" name="twitter:description" content={metaDescription} />
      <meta key="twitter-image" name="twitter:image" content={metaImage} />
      <meta key="twitter-image-alt" name="twitter:image:alt" content="semantic" />
    </>
  );
};

export default SEO;
