import { GatsbyNode } from 'gatsby';
import { createCustomWebpackConfig } from './gatsby/createCustomWebpackConfig';
import { createCustomSchema } from './gatsby/createCustomSchema';
import { createCustomPages } from './gatsby/createCustomPages';
import { sourceNodes } from './gatsby/createCustomNode';

export const onCreateNode: GatsbyNode['sourceNodes'] = sourceNodes;
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = createCustomWebpackConfig;
export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  createCustomSchema;
export const createPages: GatsbyNode['createPages'] = createCustomPages;
