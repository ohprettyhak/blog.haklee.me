import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const customTheme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif',
    heading:
      '-apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif',
    mono: 'JetBrains Mono, SFMono-Regular, Pretendard, Menlo, Consolas, PT Mono, Liberation Mono, Courier, monospace',
  },
  colors: {
    indigo: {
      100: '#EAF4FA',
      200: '#D6E8F6',
      300: '#BBBFCC',
      400: '#9AB2CD',
      500: '#748cad',
      600: '#546D94',
      700: '#3A507C',
      800: '#253764',
      900: '#1A2025',
    },
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
        color: mode('gray.800', 'white')(props),
        transition: 'all 0.1s ease-in-out',
      }),
    },
  },
  styles: {
    global: (props) => ({
      body: {
        lineHeight: 'taller',
        background: mode('white', 'indigo.900')(props),
      },
      p: {
        my: '4',
        color: mode('gray.800', 'white')(props),
        fontFamily: 'body',
      },
      a: {
        color: mode('gray.800', 'white')(props),
        fontFamily: 'body',
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
        fontFamily: 'body',
        mt: '8',
        mb: '4',
      },
      h2: {
        fontSize: '2xl',
        fontWeight: 'bold',
        fontFamily: 'body',
        lineHeight: 'taller',
        mt: '8',
        mb: '4',
      },
      h3: {
        fontSize: 'md',
        fontWeight: 'bold',
        fontFamily: 'body',
        mt: '8',
        mb: '4',
      },
      ul: {
        listStyle: 'square',
        my: '2',
        fontFamily: 'body',
      },
      li: {
        color: mode('gray.600', 'indigo.300')(props),
        fontFamily: 'body',
      },
      iframe: {
        py: '8',
      },
      blockquote: {
        fontSize: 'lg',
        fontStyle: 'italic',
        fontFamily: 'body',
      },
    }),
  },
});

export default customTheme;
