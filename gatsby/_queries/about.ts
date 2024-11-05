export type AboutPageQueryType = {
  mdx: {
    id: string;
    internal: {
      contentFilePath: string;
    };
  };
};

export const AboutPageQuery = `
    query AboutPost {
      mdx(internal: { contentFilePath: { regex: "/content/pages/about.mdx$/" } }) {
        id
        internal {
          contentFilePath
        }
      }
    }
  `;
