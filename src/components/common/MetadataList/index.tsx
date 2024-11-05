import { Link } from 'gatsby';
import React from 'react';

import { slugify } from '@/utils/slugify';

import * as styles from './styles.css';

type MetadataListProps = {
  type: string;
  metadata: [string, number][];
};

const MetadataList = ({ type, metadata }: MetadataListProps) => {
  return (
    <ul className={styles.list} data-animate={true} data-animate-speed="fast">
      {metadata.map(([category, count]) => (
        <li key={category} className={styles.item}>
          <Link to={slugify(`/${type}/${category}`)}>
            &middot; {category} ({count})
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MetadataList;
