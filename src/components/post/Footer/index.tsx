import React from 'react';

import BackButton from '@/components/common/BackButton';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';

import * as styles from './styles.css';

type FooterProps = {
  slug: string;
  title: string;
  subtitle: string;
};

const Footer = ({ slug, title, subtitle }: FooterProps) => {
  const { siteUrl } = useSiteMetadata();

  const handleShare = async () => {
    const shareData = {
      title,
      text: subtitle,
      url: `${siteUrl}/blog/${slug}/`,
    };

    await navigator.share(shareData);
  };

  return (
    <footer className={styles.root}>
      <BackButton />
      <button className={styles.share} onClick={handleShare}>
        Share this post
        <span className="material-symbols-rounded">ios_share</span>
      </button>
    </footer>
  );
};

export default Footer;
