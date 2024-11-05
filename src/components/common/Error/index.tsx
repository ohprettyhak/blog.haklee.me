import { navigate } from 'gatsby';
import React from 'react';

import { metadata } from '@/constants/metadata';

import * as styles from './styles.css';

type ErrorProps = {
  title?: string;
  description?: string;
};

const Error = ({ title, description }: ErrorProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.stoneContainer}>
        <span className={styles.stone}>🪦</span>
        <h1 className={styles.errorTitle}>{title || 'Error'}</h1>
        <p className={styles.errorDescription}>
          {description || 'The page you’re looking for can’t be found.'}
        </p>
      </div>

      <h3 className={styles.recommend}>It might be best to go back the way you came.</h3>
      <p className={styles.contact}>
        Please try again, and if the issue persists, let us know&nbsp;
        <a href={`mailto:${metadata.email}`}>here</a>.
      </p>

      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default Error;
