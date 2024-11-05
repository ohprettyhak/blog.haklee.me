import path from 'path';
import { GatsbyNode } from 'gatsby';

export const createCustomWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  getConfig,
  actions,
}) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        '@/constants': path.resolve(__dirname, '../src/constants'),
        '@/components': path.resolve(__dirname, '../src/components'),
        '@/hooks': path.resolve(__dirname, '../src/hooks'),
        '@/styles': path.resolve(__dirname, '../src/styles'),
        '@/queries': path.resolve(__dirname, '../src/queries'),
        '@/utils': path.resolve(__dirname, '../src/utils'),
      },
    },
    ignoreWarnings: [
      /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      () => true,
    ],
  });
};
