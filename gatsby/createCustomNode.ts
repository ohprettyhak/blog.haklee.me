import { GatsbyNode } from 'gatsby';
import dayjs from 'dayjs';

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({ actions, getNodesByType }) => {
  const { createNodeField } = actions;

  const mdxNodes = getNodesByType('Mdx');

  mdxNodes.forEach(node => {
    const mdxNode = node as { frontmatter?: { publishDate: string } };

    if (mdxNode.frontmatter?.publishDate) {
      createNodeField({
        name: 'timestamp',
        node,
        value: dayjs(mdxNode.frontmatter.publishDate).unix(),
      });
    }
  });
};
