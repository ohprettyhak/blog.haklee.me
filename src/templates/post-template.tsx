import { graphql, PageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

import BackButton from '@/components/common/BackButton';
import Divider from '@/components/common/Divider';
import Layout from '@/components/common/Layout';
import SEO from '@/components/common/SEO';
import Footer from '@/components/post/Footer';
import Header from '@/components/post/Header';
import Recommend from '@/components/post/Recommend';
import { rem } from '@/utils/pxto';

export const query = graphql`
  query RecommendPosts($timestamp: Int!) {
    previous: allMdx(
      filter: {
        fields: { timestamp: { lt: $timestamp } }
        internal: { contentFilePath: { regex: "/^(.*/content/posts/)(.*)$/" } }
        frontmatter: { draft: { nin: true } }
      }
      sort: { fields: { timestamp: DESC } }
      limit: 4
    ) {
      nodes {
        id
        frontmatter {
          publishDate
          slug
          title
          subtitle
          coverImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    next: allMdx(
      filter: {
        fields: { timestamp: { gt: $timestamp } }
        internal: { contentFilePath: { regex: "/^(.*/content/posts/)(.*)$/" } }
        frontmatter: { draft: { nin: true } }
      }
      sort: { fields: { timestamp: ASC } }
      limit: 4
    ) {
      nodes {
        id
        frontmatter {
          publishDate
          slug
          title
          subtitle
          coverImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

type PostPageContext = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  publishDate: string;
  modifiedDate?: string;
  category: string;
  tags: string[];
  draft?: boolean;
  coverImage?: IGatsbyImageData;
  coverImageUrl?: string;
};

type PostTemplateProps = PageProps<Queries.RecommendPostsQuery, PostPageContext>;

const PostTemplate = ({ data, pageContext, children }: PostTemplateProps) => {
  const { slug, title, subtitle, publishDate, category, coverImage } = pageContext;
  const { previous, next } = data;

  let recommendedPosts = [...next.nodes.slice(0, 2), ...previous.nodes.slice(0, 2)];
  if (recommendedPosts.length < 4) {
    if (next.nodes.length < 2)
      recommendedPosts = [...next.nodes, ...previous.nodes.slice(0, 4 - next.nodes.length)];
    else if (previous.nodes.length < 2)
      recommendedPosts = [...next.nodes.slice(0, 4 - previous.nodes.length), ...previous.nodes];
  }

  return (
    <Layout>
      <BackButton />

      <article data-animate={true}>
        <Header
          coverImage={coverImage}
          title={title}
          subtitle={subtitle}
          publishDate={publishDate}
          category={category}
        />
        <div data-content={true}>{children}</div>
        <Divider style={{ height: rem(1), marginBlock: rem(55) }} />
        <Footer slug={slug} title={title} subtitle={subtitle} />
      </article>

      <Divider style={{ height: rem(1), marginBlock: rem(55) }} />
      <Recommend posts={recommendedPosts} />
    </Layout>
  );
};

export default PostTemplate;

export const Head = ({ pageContext }: PostTemplateProps) => {
  const { slug, title, subtitle, coverImageUrl, publishDate, modifiedDate, tags, draft } =
    pageContext;

  return (
    <SEO
      slug={slug}
      title={title}
      description={subtitle}
      image={coverImageUrl}
      publishDate={publishDate}
      modifiedDate={modifiedDate}
      keywords={tags}
      draft={draft}
    />
  );
};
