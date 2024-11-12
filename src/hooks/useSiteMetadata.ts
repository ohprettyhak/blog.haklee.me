import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
          thumbnail
        }
      }
    }
  `);
  return site.siteMetadata;
};
