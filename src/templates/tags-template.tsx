import { PageProps } from 'gatsby';
import React from 'react';

import Layout from '@/components/common/Layout';
import MetadataList from '@/components/common/MetadataList';
import SEO from '@/components/common/SEO';
import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

type TagsTemplateContext = {
  tags: [string, number][];
};

type TagsTemplateProps = PageProps<undefined, TagsTemplateContext>;

const TagsTemplate = ({ pageContext }: TagsTemplateProps) => {
  const { tags } = pageContext;

  return (
    <Layout>
      <h3
        style={{ ...theme.typographies.h3, marginBottom: rem(30), color: theme.colors.gray.light }}
      >
        Tags
      </h3>
      <MetadataList type="tags" metadata={tags} />
    </Layout>
  );
};

export default TagsTemplate;

export const Head = () => <SEO title="Tags" />;
