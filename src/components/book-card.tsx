import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useColorModeValue, Grid, Box, Center, Link, Text, Image, keyframes } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const BOOK_LIST_URL = `https://haklee-notes-api.web.app/book/recently_read`;

interface dataType {
  name: string;
  author: string;
  code: string;
}

const BookCard: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    Axios.get(BOOK_LIST_URL)
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        <Text variant="small">📚 Recently Read</Text>
        {!data ? (
          <Text color={useColorModeValue('gray.500', 'white')}>Loading</Text>
        ) : (
          data.map((book: dataType, i: number) => (
            <Box key={i} mb="2">
              <Link
                href={`https://ridibooks.com/books/${book.code}`}
                target="_blank"
                fontSize="md"
                fontWeight="bold"
                textDecoration="none"
                lineHeight="0"
                title={`Read more about ${book.name} on RIDI`}
                borderBottomColor="transparent"
                borderBottomWidth="1px"
                borderBottomStyle="solid"
                transition="all 0.3s ease-in-out"
                _hover={{
                  color: 'pink.400',
                  borderBottomColor: 'pink.400',
                }}
              >
                {book.name} <ExternalLinkIcon mx="2px" />
              </Link>
              <Text m="0" mt="-0.5" fontSize="xs" textTransform="uppercase">
                by {book.author}
              </Text>
            </Box>
          ))
        )}
      </Box>
    </React.Fragment>
  );
};

export default BookCard;
