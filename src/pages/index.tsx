import * as React from 'react';
import { Flex, Heading, IconButton, useDisclosure } from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import Layout from '../components/layout';
import Now from '../components/now';

const IndexPage: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Layout>
      <Flex justifyContent="space-between" alignItems="baseline" width="100%">
        <Heading fontSize="md">Now</Heading>
        <IconButton
          width="4"
          aria-label="Hide All Now"
          colorScheme="gray"
          isRound
          onClick={onToggle}
          icon={isOpen ? <FaChevronDown /> : <FaChevronUp />}
        />
      </Flex>
      <Now isOpen={!isOpen} />
      <></>
    </Layout>
  );
};

export default IndexPage;
