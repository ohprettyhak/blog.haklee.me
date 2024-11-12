import { clsx } from 'clsx';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { ComponentProps } from 'react';

import { formatDate } from '@/utils/date';

import * as styles from './styles.css';

type PostGridProps = ComponentProps<'div'> & {
  className?: string;
  posts: Queries.LatestPostsQuery['allMdx']['nodes'];
};

const PostGrid = ({ posts, className, ...props }: PostGridProps) => {
  return (
    <div className={clsx(styles.grid, className)} {...props}>
      {posts.map(({ id, frontmatter }) => {
        const coverImage: IGatsbyImageData | undefined = getImage(
          frontmatter?.coverImage?.childImageSharp?.gatsbyImageData || null,
        );

        return (
          <Link key={id} className={styles.container} to={`/posts/${frontmatter?.slug}`}>
            <div className={styles.cover}>
              {coverImage && (
                <GatsbyImage
                  alt={frontmatter?.title || 'Cover Image'}
                  image={coverImage}
                  draggable={false}
                />
              )}
            </div>
            <h2 className={styles.title}>{frontmatter?.title}</h2>
            <p className={styles.description}>{formatDate(frontmatter?.publishDate || '')}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default PostGrid;
