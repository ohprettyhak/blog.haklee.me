import { clsx } from 'clsx';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { ComponentProps, Fragment } from 'react';

import * as styles from './styles.css';

type PostListProps = ComponentProps<'ul'> & {
  className?: string;
  posts: Queries.PostListQuery['allMdx']['nodes'];
};

const PostList = ({ posts, className, ...props }: PostListProps) => {
  return (
    <ul
      className={clsx(styles.list, className)}
      {...props}
      data-animate={true}
      data-animate-speed="slow"
    >
      {posts.map(({ id, frontmatter }) => {
        const coverImage: IGatsbyImageData | undefined = getImage(
          frontmatter?.coverImage?.childImageSharp?.gatsbyImageData || null,
        );

        return (
          <li key={id}>
            <Link className={styles.item} to={`/posts/${frontmatter?.slug}`}>
              <div className={styles.cover}>
                {coverImage && (
                  <GatsbyImage
                    alt={frontmatter?.title || 'Cover Image'}
                    image={coverImage}
                    draggable={false}
                  />
                )}
              </div>
              <div className={styles.frontmatter}>
                <h2 className={styles.title}>{frontmatter?.title}</h2>
                <p className={styles.subtitle}>{frontmatter?.subtitle}</p>
                <p className={styles.description}>
                  {frontmatter?.createdAt}
                  {frontmatter?.category && (
                    <Fragment>
                      <span className={styles.middot}>&nbsp;&middot;&nbsp;</span>
                      {frontmatter?.category}
                    </Fragment>
                  )}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default PostList;
