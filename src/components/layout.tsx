import React from 'react';
import { ChakraProvider, Container, Grid, Box, IconButton } from '@chakra-ui/react';

import customTheme from '../../theme';
import Sidebar from './sidebar';
import Seo from './seo';

type SitePageContext = {
  children: React.ReactNode;
};

const Layout: React.FC<SitePageContext> = ({ children }) => {
  return (
    <React.Fragment>
      <Seo />
      <ChakraProvider theme={customTheme} resetCSS={true}>
        <Container maxW="container.lg">
          <Grid
            gridTemplateColumns={{
              base: '100%',
              md: '200px minmax(0, 1fr)',
              lg: '200px minmax(0, 1px) minmax(0, 1fr)',
            }}
            py="10"
            gap={{ base: '0', md: '2', lg: '10' }}
          >
            <Sidebar />
            <Box
              background="linear-gradient(180deg, #e6e6e6 0, #e6e6e6 48%, #fff)"
              height="33vh"
              width="1px"
              display={{ base: 'none', md: 'none', lg: 'block' }}
            />
            <Box as="main">{children}</Box>
          </Grid>
        </Container>
      </ChakraProvider>
    </React.Fragment>
  );
};

export default Layout;
