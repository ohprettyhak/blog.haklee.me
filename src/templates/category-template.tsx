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
  query CategoryPosts($categories: String!, $limit: Int!, $skip: Int!) {
    allMdx(
      filter: { frontmatter: { category: { eq: $categories } } }
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

type CategoryTemplateContext = {
  category: string;
  count: number;
  limit: number;
  skip: number;
  maxPages: number;
  currentPage: number;
};

type CategoryTemplateProps = PageProps<Queries.CategoryPostsQuery, CategoryTemplateContext>;

const CategoryTemplate = ({ data, pageContext }: CategoryTemplateProps) => {
  const { category, count, currentPage, maxPages } = pageContext;

  return (
    <Layout>
      <h3
        style={{ ...theme.typographies.h3, marginBottom: rem(30), color: theme.colors.gray.light }}
      >
        Category: {category} ({count})
      </h3>
      <PostList posts={data.allMdx.nodes} />
      <Pagination
        prefix={slugify(`categories/${category}`)}
        currentPage={currentPage}
        maxPages={maxPages}
      />
    </Layout>
  );
};

export default CategoryTemplate;

export const Head = ({ pageContext }: CategoryTemplateProps) => {
  const { category, currentPage } = pageContext;
  const { title: siteName } = useSiteMetadata();
  if (currentPage === 1) return <title>{`${category} – ${siteName}`}</title>;
  return <title>{`${category} (${currentPage} Page) – ${siteName}`}</title>;
};
