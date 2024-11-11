import { createThemeContract, createTheme, createGlobalTheme } from '@vanilla-extract/css';

import { rem } from '@/utils/pxto';

const sizes = {
  appWidth: rem(758),
  appInlineSpace: rem(24),
  sidebarWidth: rem(210),
};

const fonts = {
  mono: `"Roboto Mono", "Pretendard Variable", "Courier New", Courier, monospace`,
  sans: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
};

const typographies = {
  h7: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(10),
    lineHeight: rem(18),
  },
  h6: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(11),
    lineHeight: rem(18),
  },
  h5: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(12),
    lineHeight: 'auto',
  },
  h4: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(13),
    lineHeight: 'auto',
  },
  h3: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(15),
    lineHeight: rem(15),
  },
  post_subtitle: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(15),
    lineHeight: rem(26),
  },
  post_title: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(24),
    lineHeight: rem(40),
  },
  post_description: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(13),
    lineHeight: rem(26),
  },
  post_image_description: {
    fontFamily: fonts.sans,
    fontWeight: '400',
    fontSize: rem(15),
    lineHeight: rem(13),
  },
  post_body: {
    fontFamily: fonts.sans,
    fontWeight: '400',
    fontSize: rem(16),
    lineHeight: '180%',
  },
  profile_sub: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(11),
    lineHeight: rem(20),
  },
  profile_name: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(13),
    lineHeight: rem(13),
  },
  profile_title: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(13),
    lineHeight: rem(20),
  },
  a: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(14),
    lineHeight: 'auto',
  },
};

const layouts = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerX: {
    display: 'flex',
    justifyContent: 'center',
  },
  centerY: {
    display: 'flex',
    alignItems: 'center',
  },
  rowBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnCenterX: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  columnCenterY: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

const zIndices = {
  overlay: '100',
  headerContainer: '150',
  modal: '200',
};

export const colors = createThemeContract({
  gray: {
    accent: '--semantic-colors-gray-accent',
    bold: '--semantic-colors-gray-bold',
    mid: '--semantic-colors-gray-mid',
    light: '--semantic-colors-gray-light',
    click: '--semantic-colors-gray-click',
    hover: '--semantic-colors-gray-hover',
  },

  white: '--semantic-colors-white',

  black: '--semantic-colors-black',
  border: '--semantic-colors-border',
  background: '--semantic-colors-background',
  background02: '--semantic-colors-background02',
  background03: '--semantic-colors-background03',
  background04: '--semantic-colors-background04',
  background06: '--semantic-colors-background06',
  background08: '--semantic-colors-background08',

  toggle: '--semantic-colors-toggle',
  license: '--semantic-colors-license',

  gradient: {
    sidebar_divider: '--semantic-gradient-sidebar-divider',
  },

  mdx: {
    note: '--semantic-mdx-note',
    noteBackground: '--semantic-mdx-note-background',
    tip: '--semantic-mdx-tip',
    tipBackground: '--semantic-mdx-tip-background',
    important: '--semantic-mdx-important',
    importantBackground: '--semantic-mdx-important-background',
    warning: '--semantic-mdx-warning',
    warningBackground: '--semantic-mdx-warning-background',
    caution: '--semantic-mdx-caution',
    cautionBackground: '--semantic-mdx-caution-background',
  },
});

export const lightColors = createTheme(colors, {
  gray: {
    accent: '#1D1D30',
    bold: '#393960',
    mid: '#6B6B87',
    light: '#B5B5C3',
    click: '#6B6B87',
    hover: '#F9F9FC',
  },

  white: '#FFFFFF',
  black: '#000000',
  border: '#F4F4F8',
  background: '#FCFCFD',
  background02: 'rgba(0, 0, 0, 0.02)',
  background03: 'rgba(0, 0, 0, 0.03)',
  background04: 'rgba(0, 0, 0, 0.04)',
  background06: 'rgba(0, 0, 0, 0.06)',
  background08: 'rgba(0, 0, 0, 0.08)',

  toggle: '#FFFFFF',
  license: '#B5B5C3',

  gradient: {
    sidebar_divider: 'radial-gradient(circle, #D9DBE7 0%, rgba(217, 219, 231, 0) 100%)',
  },

  mdx: {
    note: '#2e67d3',
    noteBackground: '#f7fbff',
    tip: '#2e67d3',
    tipBackground: '#f7fbff',
    important: '#7b52d7',
    importantBackground: '#fbf7ff',
    warning: '#936921',
    warningBackground: '#fffdf7',
    caution: '#be3536',
    cautionBackground: '#fffafa',
  },
});

export const darkColors = createTheme(colors, {
  gray: {
    accent: '#FFFFFF',
    bold: '#DDDDDD',
    mid: '#B2B2B2',
    light: '#888888',
    click: '#1B1B1B',
    hover: '#141414',
  },

  white: '#FFFFFF',
  black: '#000000',
  border: '#1B1B1B',
  background: '#0F0F0F',
  background02: 'rgba(255, 255, 255, 0.02)',
  background03: 'rgba(255, 255, 255, 0.03)',
  background04: 'rgba(255, 255, 255, 0.04)',
  background06: 'rgba(255, 255, 255, 0.06)',
  background08: 'rgba(255, 255, 255, 0.08)',

  toggle: '#000000',
  license: '#B2B2B2',

  gradient: {
    sidebar_divider: 'radial-gradient(circle, #36363A 0%, rgba(61, 61, 67, 0) 100%)',
  },

  mdx: {
    note: '#386de3',
    noteBackground: '#14151d',
    tip: '#386de3',
    tipBackground: '#14151d',
    important: '#8259dd',
    importantBackground: '#1a1026',
    warning: '#966c23',
    warningBackground: '#1a1612',
    caution: '#c9453c',
    cautionBackground: '#1a0f0f',
  },
});

export const theme = createGlobalTheme(':root', {
  colors,
  fonts,
  sizes,
  layouts,
  typographies,
  zIndices,
});
