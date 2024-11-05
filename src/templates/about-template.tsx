import { graphql, PageProps } from 'gatsby';
import React from 'react';

import Footer from '@/components/about/Footer';
import Layout from '@/components/common/Layout';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';

export const query = graphql`
  query AboutTemplate {
    mdx(internal: { contentFilePath: { regex: "/content/pages/about.mdx$/" } }) {
      frontmatter {
        date
      }
    }
  }
`;

type AboutTemplateProps = PageProps<Queries.AboutTemplateQuery>;

const AboutTemplate = ({ data, children }: AboutTemplateProps) => {
  const { mdx } = data;
  if (!mdx) return null;

  const { frontmatter } = mdx;

  return (
    <Layout>
      <article>
        <div data-content={true}>{children}</div>
      </article>
      <Footer date={frontmatter?.date ?? '-'} />
    </Layout>
  );
};

export default AboutTemplate;

export const Head = () => {
  const { title } = useSiteMetadata();
  return <title>{`About – ${title}`}</title>;
};
