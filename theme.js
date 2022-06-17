import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif',
    heading:
      '-apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif',
    mono: 'JetBrains Mono, SFMono-Regular, Pretendard, Menlo, Consolas, PT Mono, Liberation Mono, Courier, monospace',
  },
  components: {
    Button: {
      baseStyle: (props) => ({
        _hover: {
          textDecoration: 'none',
        },
      }),
    },
    Text: {
      baseStyle: (props) => ({
        transition: 'all 100ms ease-in-out',
      }),
    },
  },
  styles: {
    global: (props) => ({
      body: {
        lineHeight: 'taller',
        background: mode('white', 'gray.900')(props),
      },
      p: {
        color: mode('gray.800', 'white')(props),
        my: '4',

        a: {
          color: mode('primary.500', 'primary.400')(props),
          borderBottomWidth: '1px',
          borderBottomColor: mode('primary.500', 'primary.400')(props),
        },
      },
      a: {
        color: mode('gray.800', 'white')(props),
        borderBottomWidth: '1px',
        borderBottomColor: 'transparent',
        _hover: {
          color: mode('primary.500', 'primary.400')(props),
          borderBottomColor: mode('primary.500', 'primary.400')(props),
          borderBottomWidth: '1px',
        },
      },
      h1: {
        fontSize: 'xl',
        fontWeight: 'bold',
        mt: '8',
        mb: '4',
      },
      h2: {
        fontSize: '2xl',
        fontWeight: 'bold',
        lineHeight: 'taller',
        mt: '8',
        mb: '4',
      },
      h3: {
        fontSize: 'md',
        fontWeight: 'bold',
        mt: '8',
        mb: '4',
      },
      ul: {
        listStyle: 'square',
        my: '2',
      },
      li: {
        color: mode('gray.600', 'indigo.300')(props),
      },
      iframe: {
        py: '8',
      },
      blockquote: {
        fontSize: 'lg',
        fontStyle: 'italic',
      },
    }),
  },
});

export default customTheme;
