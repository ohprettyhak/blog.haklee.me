import React from 'react';
import { useColorModeValue, Link } from '@chakra-ui/react';

type SocialIconType = {
  href: string;
  children: any;
  label: string;
};

const SocialIcon: React.FC<SocialIconType> = ({ children, href, label }) => {
  return (
    <Link
      href={href}
      target="_blank"
      variant="outline"
      aria-label={label}
      display="inline-flex"
      width="10"
      height="10"
      alignItems="center"
      justifyContent="center"
      color={useColorModeValue('gray.900', 'white')}
      textDecoration="none"
      borderColor="gray.200"
      borderWidth="1px"
      borderStyle="solid"
      borderRadius="50%"
      backgroundColor="transparent"
      overflow="hidden"
      transition="all 0.3s ease-in-out"
      _hover={{
        color: useColorModeValue('pink.500', 'white'),
        backgroundColor: useColorModeValue('pink.50', 'whiteAlpha.300'),
      }}
    >
      {children}
    </Link>
  );
};

export default SocialIcon;
