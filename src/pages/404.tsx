import React from 'react';

import Error from '@/components/common/Error';
import Layout from '@/components/common/Layout';
import SEO from '@/components/common/SEO';
import * as styles from '@/styles/pages.css';

const NotFoundPage = () => {
  return (
    <Layout className={styles.centered}>
      <Error title="Not Found" />
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <SEO title="Not found" />;
