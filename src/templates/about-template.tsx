import { PageProps } from 'gatsby';
import React from 'react';

import Footer from '@/components/about/Footer';
import Layout from '@/components/common/Layout';
import SEO from '@/components/common/SEO';

type AboutTemplateContext = {
  createdAt: string;
};

type AboutTemplateProps = PageProps<undefined, AboutTemplateContext>;

const AboutTemplate = ({ pageContext, children }: AboutTemplateProps) => {
  return (
    <Layout>
      <article>
        <div data-content={true}>{children}</div>
      </article>
      <Footer date={pageContext.createdAt} />
    </Layout>
  );
};

export default AboutTemplate;

export const Head = () => <SEO title="About" />;
