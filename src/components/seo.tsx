import React from 'react';
import { Helmet } from 'react-helmet';

import config from '../../config';

const Head: React.FC = () => {
  return (
    <Helmet htmlAttributes={{ lang: config.lang }}>
      <title>{config.title}</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
      />
      <style>@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&display=swap');</style>
    </Helmet>
  );
};

export default Head;
