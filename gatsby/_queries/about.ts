export type AboutPageQueryType = {
  mdx: {
    id: string;
    internal: {
      contentFilePath: string;
    };
    frontmatter: {
      createdAt: string;
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
        frontmatter {
          createdAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  `;
