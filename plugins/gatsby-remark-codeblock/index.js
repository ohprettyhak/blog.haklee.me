// - https://github.com/ricale/blog/blob/58aa51105b654f814f32b1cc8a3e8b476bd00c3d/plugins/gatsby-remark-codeblock/index.js
// - https://github.com/DSchau/gatsby-remark-code-titles
// - https://github.com/iamskok/gatsby-remark-code-buttons

const visit = require('unist-util-visit');
const qs = require('query-string');
const { CONTAINER_CLASS, BUTTON_CLASS } = require('./constants');

const TITLE_CLASS = 'codeblock-title';
const BUTTON_LABEL = 'Copy';

module.exports = function gatsbyRemarkCodeTitles({ markdownAST }) {
  visit(markdownAST, 'code', (node, index, parent) => {
    const [language, params] = (node.lang || '').split(':');
    const options = qs.parse(params);
    const { title, hideCopyButton, ...rest } = options;
    if (!language) {
      return;
    }

    parent.children.splice(index, 1, {
      type: 'parent',
      children: [
        ...(!title
          ? []
          : [
              {
                type: 'parent',
                children: [{ type: 'text', value: title }],
                data: {
                  hProperties: { className: TITLE_CLASS },
                },
              },
            ]),
        node,
        ...(hideCopyButton
          ? []
          : [
              {
                type: 'parent',
                children: [{ type: 'text', value: BUTTON_LABEL }],
                data: {
                  hName: 'button',
                  hProperties: { className: BUTTON_CLASS },
                },
              },
            ]),
      ],
      data: {
        hProperties: { className: CONTAINER_CLASS },
      },
    });

    let query = '';
    if (Object.keys(rest).length) {
      query =
        `:` +
        Object.keys(rest)
          .map(key => `${key}=${rest[key]}`)
          .join('&');
    }

    node.lang = language + query;
  });

  return markdownAST;
};
