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
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

type CategoryTemplateContext = {
  categories: string;
  count: number;
  limit: number;
  skip: number;
  maxPages: number;
  currentPage: number;
};

type CategoryTemplateProps = PageProps<Queries.CategoryPostsQuery, CategoryTemplateContext>;

const CategoryTemplate = ({ data, pageContext }: CategoryTemplateProps) => {
  const { categories, count, currentPage, maxPages } = pageContext;

  return (
    <Layout>
      <h3
        style={{ ...theme.typographies.h3, marginBottom: rem(30), color: theme.colors.gray.light }}
      >
        Category: {categories} ({count})
      </h3>
      <PostList posts={data.allMdx.nodes} />
      <Pagination
        prefix={slugify(`categories/${categories}`)}
        currentPage={currentPage}
        maxPages={maxPages}
      />
    </Layout>
  );
};

export default CategoryTemplate;

export const Head = ({ pageContext }: CategoryTemplateProps) => {
  const { categories, currentPage } = pageContext;
  const { title: siteName } = useSiteMetadata();
  if (currentPage === 1) return <title>{`${categories} – ${siteName}`}</title>;
  return (
    <title
      key={`title-category-${categories}-p${currentPage}`}
    >{`${categories} (${currentPage} Page) – ${siteName}`}</title>
  );
};
