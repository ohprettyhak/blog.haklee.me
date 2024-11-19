import { clsx } from 'clsx';
import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';

import Layout from '@/components/common/Layout';
import PostGrid from '@/components/common/PostGrid';
import SEO from '@/components/common/SEO';
import ProfileGrid from '@/components/index/ProfileGrid';

import * as styles from '../styles/pages.css';

export const query = graphql`
  query LatestPosts {
    allMdx(
      limit: 4
      sort: { fields: { timestamp: DESC } }
      filter: {
        internal: { contentFilePath: { regex: "/^(.*/content/posts/)(.*)$/" } }
        frontmatter: { draft: { nin: true } }
      }
    ) {
      nodes {
        id
        frontmatter {
          createdAt(formatString: "MMMM DD, YYYY")
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

export const Head = () => <SEO />;
