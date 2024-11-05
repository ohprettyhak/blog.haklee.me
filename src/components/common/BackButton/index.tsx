import { navigate } from 'gatsby';
import React from 'react';

import * as styles from './styles.css';

const BackButton = () => {
  return (
    <button className={styles.root} onClick={() => navigate(-1)}>
      <span className="material-symbols-rounded">arrow_back_ios_new</span>
      Back
    </button>
  );
};

export default BackButton;
