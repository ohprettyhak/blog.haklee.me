import { GatsbyNode } from 'gatsby';

export const createCustomSchema: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
      fields: MdxFields
    }

    type MdxFrontmatter {
      category: String
      draft: Boolean
      tag: [String]
      createdAt: Date @dateformat
      modifiedAt: Date @dateformat
    }

    type MdxFields {
      timestamp: Int
    }
  `);
};
