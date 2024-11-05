import { clsx } from 'clsx';
import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';

import Layout from '@/components/common/Layout';
import PostGrid from '@/components/common/PostGrid';
import ProfileGrid from '@/components/index/ProfileGrid';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';

import * as styles from '../styles/pages.css';

export const query = graphql`
  query LatestPosts {
    allMdx(
      limit: 4
      sort: { frontmatter: { date: DESC } }
      filter: { internal: { contentFilePath: { regex: "/^(.*/content/posts/)(.*)$/" } } }
    ) {
      nodes {
        id
        frontmatter {
          date
          slug
          title
          subtitle
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

type IndexPageProps = PageProps<Queries.LatestPostsQuery>;

const IndexPage = ({ data }: IndexPageProps) => {
  const { allMdx } = data;
  const { nodes: posts } = allMdx;

  return (
    <Layout>
      <ProfileGrid />

      <section className={styles.root}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>Update</h3>
          <Link to={'/posts/'} className={styles.expandLink}>
            Expand<span className={clsx(styles.expandIcon, 'material-symbols-rounded')}>add</span>
          </Link>
        </div>
        <PostGrid posts={posts} />
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => {
  const { title } = useSiteMetadata();
  return <title>{title}</title>;
};
