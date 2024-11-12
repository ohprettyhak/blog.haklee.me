import path from 'path';
import { GatsbyNode } from 'gatsby';

import { AboutPageQuery, AboutPageQueryType } from './_queries/about';
import { PostPageQuery, PostPageQueryType } from './_queries/post';
import { getImage, getSrc, IGatsbyImageData } from 'gatsby-plugin-image';
import { generatePaginatedPage, generateMetadataPages } from './_utils/page-generator';

const templates = {
  about: path.resolve(`./src/templates/about-template.tsx`),
  post: path.resolve(`./src/templates/post-template.tsx`),
  posts: path.resolve(`./src/templates/posts-template.tsx`),
  category: path.resolve(`./src/templates/category-template.tsx`),
  categories: path.resolve(`./src/templates/categories-template.tsx`),
  tag: path.resolve(`./src/templates/tag-template.tsx`),
  tags: path.resolve(`./src/templates/tags-template.tsx`),
};

export const createCustomPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage, createRedirect } = actions;

  // Post pages
  const postQueryResult = await graphql<PostPageQueryType>(PostPageQuery);

  if (postQueryResult.errors) {
    reporter.panicOnBuild('🚨 MDX query error at PostPageQuery', postQueryResult.errors);
    return;
  }

  const posts = postQueryResult.data?.allMdx.nodes || [];
  const categories = new Map<string, number>();
  const tags = new Map<string, number>();

  posts.forEach(({ frontmatter, fields, internal }) => {
    const { slug, category, tag, coverImage, draft } = frontmatter;
    const cover: IGatsbyImageData | undefined = getImage(
      coverImage?.childImageSharp?.gatsbyImageData || null,
    );

    const coverImageUrl = coverImage?.childImageSharp ? getSrc(coverImage.childImageSharp) : null;

    createPage({
      path: `/posts/${slug}`,
      component: `${templates.post}?__contentFilePath=${internal.contentFilePath}`,
      context: {
        ...frontmatter,
        tags: tag ?? [],
        coverImage: cover,
        coverImageUrl,
        timestamp: fields.timestamp,
      },
    });

    if (draft) return;
    if (category) categories.set(category, (categories.get(category) || 0) + 1);
    tag?.forEach(t => tags.set(t, (tags.get(t) || 0) + 1));
  });

  generatePaginatedPage(posts.length, 'posts', templates.posts, 'Posts', createPage);
  generateMetadataPages(categories, 'categories', templates.category, createPage);
  generateMetadataPages(tags, 'tags', templates.tag, createPage);

  createPage({
    path: `/categories`,
    component: templates.categories,
    context: { categories: Array.from(categories) },
  });

  createPage({
    path: `/tags`,
    component: templates.tags,
    context: { tags: Array.from(tags) },
  });

  // About page
  const aboutQueryResult = await graphql<AboutPageQueryType>(AboutPageQuery);
  if (aboutQueryResult.errors) {
    reporter.panicOnBuild('🚨 MDX query error at AboutPageQuery', aboutQueryResult.errors);
    return;
  }

  if (aboutQueryResult.data?.mdx) {
    const { id, internal } = aboutQueryResult.data.mdx;

    createPage({
      path: `/about`,
      component: `${templates.about}?__contentFilePath=${internal.contentFilePath}`,
      context: { id },
    });
  }

  // Redirects
  createRedirect({ fromPath: `/post/p/1/`, toPath: `/post/` });
};
