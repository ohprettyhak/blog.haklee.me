import React, { useEffect, useState } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Axios from 'axios';
import { useColorModeValue, SimpleGrid, Box, Center, Link, Text, Image, keyframes } from '@chakra-ui/react';

const emoji = function (array: string[]) {
  return array[Math.floor(Math.random() * array.length)];
};

const BookCard: React.FC = () => {
  return (
    <React.Fragment>
      <Box
        gridColumn={{ base: 'span 2', md: 'initial' }}
        p="4"
        boxShadow="sm"
        borderRadius="16"
        backgroundColor={useColorModeValue('gray.50', 'gray.700')}
        transition="all 0.2s ease-in-out"
        _hover={{ boxShadow: 'base' }}
      >
        <Text pb={2} variant="small">
          {`${emoji(['📚', '📖', '📕', '📒', '📔', '📙', '📘'])} Recently Read`}
        </Text>
      </Box>
    </React.Fragment>
  );
};

export default BookCard;
