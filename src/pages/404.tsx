import React from 'react';

import Error from '@/components/common/Error';
import Layout from '@/components/common/Layout';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';
import * as styles from '@/styles/pages.css';

const NotFoundPage = () => {
  return (
    <Layout className={styles.centered}>
      <Error title="Not Found" />
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => {
  const { title } = useSiteMetadata();
  return <title key="title-404">{`Not found – ${title}`}</title>;
};
