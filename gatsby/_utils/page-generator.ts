import { Actions } from 'gatsby';

import { slugify } from '../../src/utils/slugify';

const perPage = 8;

export const generatePaginatedPage = (
  totalItems: number,
  basePath: string,
  component: string,
  title: string,
  createPage: Actions['createPage'],
) => {
  const totalPages = Math.ceil(totalItems / perPage);
  Array.from({ length: totalPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/${basePath}` : `/${basePath}/p/${i + 1}`,
      component,
      context: {
        title,
        type: basePath,
        limit: perPage,
        skip: i * perPage,
        maxPages: totalPages,
        currentPage: i + 1,
      },
    });
  });
};

export const generateMetadataPages = (
  items: Map<string, number>,
  pathPrefix: string,
  template: string,
  createPage: Actions['createPage'],
) => {
  items.forEach((count, item) => {
    const totalPages = Math.ceil(count / perPage);

    Array.from({ length: totalPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? slugify(`/${pathPrefix}/${item}`)
            : slugify(`/${pathPrefix}/${item}/p/${i + 1}`),
        component: template,
        context: {
          [pathPrefix]: item,
          count,
          limit: perPage,
          skip: i * perPage,
          maxPages: totalPages,
          currentPage: i + 1,
        },
      });
    });
  });
};
