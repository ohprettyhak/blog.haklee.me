import { clsx } from 'clsx';
import { Link } from 'gatsby';
import React from 'react';

import { theme } from '@/styles/theme.css';

import * as styles from './styles.css';

type PaginationProps = {
  currentPage: number;
  maxPages: number;
  prefix: string;
};

const Pagination = ({ currentPage, maxPages, prefix }: PaginationProps) => {
  return (
    <nav className={styles.root}>
      <ul className={styles.container}>
        {currentPage > 1 && (
          <li key="pagination-left">
            <Link
              className={clsx(styles.item, 'material-symbols-rounded')}
              to={`/${prefix}/${currentPage - 1 === 1 ? '' : `p/${currentPage - 1}`}`}
              aria-label="Previous page"
            >
              chevron_left
            </Link>
          </li>
        )}

        {Array.from({ length: maxPages }, (_, i) => (
          <li
            key={`pagination-number-${i + 1}`}
            className={clsx(styles.item, i + 1 === currentPage && styles.active)}
            style={{ fontFamily: theme.fonts.mono }}
          >
            <Link to={`/${prefix}/${i === 0 ? '' : `p/${i + 1}`}`}>{i + 1}</Link>
          </li>
        ))}

        {currentPage < maxPages && (
          <li key="pagination-right">
            <Link
              className={clsx(styles.item, 'material-symbols-rounded')}
              to={`/${prefix}/p/${currentPage + 1}`}
              aria-label="Next page"
            >
              chevron_right
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
