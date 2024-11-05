import { graphql, PageProps } from 'gatsby';
import React from 'react';

import Layout from '@/components/common/Layout';
import Pagination from '@/components/common/Pagination';
import PostList from '@/components/common/PostList';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';
import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const query = graphql`
  query PostList($limit: Int!, $skip: Int!) {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
      filter: { internal: { contentFilePath: { regex: "/^(.*/content/posts/)(.*)$/" } } }
    ) {
      nodes {
        id
        frontmatter {
          date
          slug
          title
          subtitle
          category
          coverImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    count: allMdx(
      filter: { internal: { contentFilePath: { regex: "/^(.*/content/posts/)(.*)$/" } } }
    ) {
      totalCount
    }
  }
`;

type PostsTemplateContext = {
  title: string;
  type: string;
  limit: number;
  skip: number;
  maxPages: number;
  currentPage: number;
};

type PostsTemplateProps = PageProps<Queries.PostListQuery, PostsTemplateContext>;

const PostsTemplate = ({ data, pageContext }: PostsTemplateProps) => {
  const { type, title, currentPage, maxPages } = pageContext;

  const { allMdx, count } = data;

  return (
    <Layout>
      <h3
        style={{ ...theme.typographies.h3, marginBottom: rem(30), color: theme.colors.gray.light }}
      >
        {title} ({count.totalCount})
      </h3>
      <PostList posts={allMdx.nodes} />
      <Pagination prefix={type} currentPage={currentPage} maxPages={maxPages} />
    </Layout>
  );
};

export default PostsTemplate;

export const Head = ({ pageContext }: PostsTemplateProps) => {
  const { title, currentPage } = pageContext;
  const { title: siteName } = useSiteMetadata();
  if (currentPage === 1) return <title>{`${title} – ${siteName}`}</title>;
  return <title>{`${title} (${currentPage} Page) – ${siteName}`}</title>;
};
