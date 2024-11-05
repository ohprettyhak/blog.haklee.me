import { graphql, PageProps } from 'gatsby';
import React from 'react';

import Layout from '@/components/common/Layout';
import Pagination from '@/components/common/Pagination';
import PostList from '@/components/common/PostList';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';
import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';
import { slugify } from '@/utils/slugify';

export const query = graphql`
  query TagPosts($tags: [String!], $limit: Int!, $skip: Int!) {
    allMdx(
      filter: { frontmatter: { tag: { in: $tags } } }
      limit: $limit
      sort: { frontmatter: { date: DESC } }
      skip: $skip
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
  }
`;

type TagTemplateContext = {
  tags: string;
  count: number;
  limit: number;
  skip: number;
  maxPages: number;
  currentPage: number;
};

type TagTemplateProps = PageProps<Queries.TagPostsQuery, TagTemplateContext>;

const TagTemplate = ({ data, pageContext }: TagTemplateProps) => {
  const { tags, count, currentPage, maxPages } = pageContext;

  return (
    <Layout>
      <h3
        style={{ ...theme.typographies.h3, marginBottom: rem(30), color: theme.colors.gray.light }}
      >
        Tag: {tags} ({count})
      </h3>
      <PostList posts={data.allMdx.nodes} />
      <Pagination prefix={slugify(`tags/${tags}`)} currentPage={currentPage} maxPages={maxPages} />
    </Layout>
  );
};

export default TagTemplate;

export const Head = ({ pageContext }: TagTemplateProps) => {
  const { tags, currentPage } = pageContext;
  const { title: siteName } = useSiteMetadata();
  if (currentPage === 1) return <title>{`${tags} – ${siteName}`}</title>;
  return <title>{`${tags} (${currentPage} Page) – ${siteName}`}</title>;
};
