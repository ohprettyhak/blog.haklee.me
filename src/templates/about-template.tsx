import { graphql, PageProps } from 'gatsby';
import React from 'react';

import Footer from '@/components/about/Footer';
import Layout from '@/components/common/Layout';
import SEO from '@/components/common/SEO';

export const query = graphql`
  query AboutTemplate {
    mdx(internal: { contentFilePath: { regex: "/content/pages/about.mdx$/" } }) {
      frontmatter {
        publishDate(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

type AboutTemplateProps = PageProps<Queries.AboutTemplateQuery>;

const AboutTemplate = ({ data, children }: AboutTemplateProps) => {
  const { mdx } = data;
  if (!mdx) return null;

  const { frontmatter } = mdx;
  if (!frontmatter) return null;

  return (
    <Layout>
      <article>
        <div data-content={true}>{children}</div>
      </article>
      <Footer date={frontmatter.publishDate ?? '-'} />
    </Layout>
  );
};

export default AboutTemplate;

export const Head = () => <SEO title="About" />;
