import React from 'react';
import { SimpleGrid, Collapse, Box } from '@chakra-ui/react';

import MusicCard from './music-card';

type NowType = {
  isOpen: boolean;
};

const Now: React.FC<NowType> = ({ isOpen }) => {
  return (
    <Collapse in={isOpen} animateOpacity>
      <SimpleGrid columns={2} spacing={4} mb="8">
        <MusicCard />
        <Box gridColumn="span 2" position="relative">
          <Box
            bgGradient="linear(to-b, rgba(196,196,196,0) 0%, background 80%)"
            position="absolute"
            width="100%"
            height="100%"
            zIndex="100"
            hidden={isOpen}
          />
        </Box>
      </SimpleGrid>
    </Collapse>
  );
};

export default Now;
