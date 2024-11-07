import React from 'react';

import Error from '@/components/common/Error';
import Layout from '@/components/common/Layout';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';
import * as styles from '@/styles/pages.css';

const ServerErrorPage = () => {
  return (
    <Layout className={styles.centered}>
      <Error title="Server Error" />
    </Layout>
  );
};

export default ServerErrorPage;

export const Head = () => {
  const { title } = useSiteMetadata();
  return <title key="title-500">{`Server Error – ${title}`}</title>;
};
