import dayjs from 'dayjs';
import React from 'react';

import * as styles from './styles.css';

type FooterProps = {
  date: string;
};

const Footer = ({ date }: FooterProps) => {
  return (
    <footer className={styles.root}>
      <p className={styles.date}>Last update: {dayjs(date).format('YYYY-MM-DD HH:mm')}</p>
    </footer>
  );
};

export default Footer;