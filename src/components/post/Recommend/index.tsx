import React from 'react';

import PostGrid from '@/components/common/PostGrid';

import * as styles from './styles.css';

type RecommendProps = {
  posts: Queries.RecommendPostsQuery['previous']['nodes'];
};

const Recommend = ({ posts }: RecommendProps) => {
  return (
    <div>
      <h3 className={styles.title}>🦾 Check them out</h3>
      <PostGrid className={styles.postGrid} posts={posts} />
    </div>
  );
};

export default Recommend;
