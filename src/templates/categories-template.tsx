import { PageProps } from 'gatsby';
import React from 'react';

import Layout from '@/components/common/Layout';
import MetadataList from '@/components/common/MetadataList';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';
import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

type CategoriesTemplateContext = {
  categories: [string, number][];
};

type CategoriesTemplateProps = PageProps<undefined, CategoriesTemplateContext>;

const CategoriesTemplate = ({ pageContext }: CategoriesTemplateProps) => {
  const { categories } = pageContext;

  return (
    <Layout>
      <h3
        style={{ ...theme.typographies.h3, marginBottom: rem(30), color: theme.colors.gray.light }}
      >
        Categories
      </h3>
      <MetadataList type="categories" metadata={categories} />
    </Layout>
  );
};

export default CategoriesTemplate;

export const Head = () => {
  const { title: siteName } = useSiteMetadata();
  return <title>{`Categories – ${siteName}`}</title>;
};
