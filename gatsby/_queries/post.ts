import { IGatsbyImageData } from 'gatsby-plugin-image';

export type PostPageQueryType = {
  allMdx: {
    nodes: {
      fields: {
        timestamp: number;
      };
      frontmatter: {
        category?: string;
        coverImage: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          } | null;
        } | null;
        draft?: boolean;
        modifiedAt?: string;
        createdAt: string;
        slug: string;
        subtitle: string;
        tag?: string[];
        title: string;
      };
      id: string;
      internal: {
        contentFilePath: string;
      };
    }[];
  };
};

export const PostPageQuery = `
  query GetAllMdxPosts {
    allMdx(
      filter: {
        internal: {
          contentFilePath: { regex: "/^(.*/content/posts/)(.*)$/" }
        }
      }
    ) {
      nodes {
        id
        fields {
          timestamp
        }
        frontmatter {
          category
          coverImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          draft
          modifiedAt(formatString: "MMMM DD, YYYY")
          createdAt(formatString: "MMMM DD, YYYY")
          slug
          subtitle
          tag
          title
        }
        internal {
          contentFilePath
        }
      }
    }
  }
`;
