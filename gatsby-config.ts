import type { GatsbyConfig } from 'gatsby';
import remarkGfm from 'remark-gfm';

import { metadata } from './src/constants/metadata';

const config: GatsbyConfig = {
  siteMetadata: metadata,
  graphqlTypegen: {
    typesOutputPath: `./src/__generated__/gatsby-types.d.ts`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-vanilla-extract`,
      options: {
        identifiers: `short`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          'gatsby-remark-codeblock',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 757,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true,
            },
          },
        ],
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-GS3JLLFRKW'],
      },
    },
  ],
  flags: {
    DEV_SSR: true,
  },
};

export default config;
