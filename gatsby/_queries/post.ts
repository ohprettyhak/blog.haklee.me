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
        modifiedDate?: string;
        publishDate: string;
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
          modifiedDate
          publishDate
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
