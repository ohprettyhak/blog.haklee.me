import dayjs from 'dayjs';
import { Link } from 'gatsby';
import React from 'react';

import { useSiteMetadata } from '@/hooks/useSiteMetadata';

import * as styles from './styles.css';
import Divider from '../../Divider';
import NavigateMenu from '../NavigateMenu';
import ThemeToggle from '../ThemeToggle';

const Sidebar: React.FC = () => {
  const { title, author } = useSiteMetadata();

  return (
    <aside className={styles.root}>
      <div className={styles.topContainer}>
        <Link to="/" className={styles.branding}>
          {title}
        </Link>
        <Divider />
        <NavigateMenu />
      </div>
      <div className={styles.bottomContainer}>
        <ThemeToggle />
        <p className={styles.license}>
          Copyright © {dayjs().year()} {author}, All rights reserved.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
