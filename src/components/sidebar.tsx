import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { useLocation } from '@reach/router';
import { StaticImage } from 'gatsby-plugin-image';
import {
  useColorMode,
  useColorModeValue,
  Grid,
  Flex,
  VStack,
  UnorderedList,
  ListItem,
  SimpleGrid,
  Link,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaRss, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';

import config from '../../config';
import SocialIcon from './social-icon';

const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Grid
      as="aside"
      alignContent="flex-start"
      gap="10"
      gridTemplateColumns={{ base: 'auto auto', md: 'auto' }}
      mb={{ base: '8', md: '0' }}
      top={{ base: '0', md: '4' }}
    >
      <Flex direction="column">
        <Link
          as={GatsbyLink}
          to="/"
          display="inline-block"
          width="24"
          height="24"
          overflow="hidden"
          borderRadius="50%"
          color="transparent"
          textDecoration="none"
          transform="translateZ(0)"
        >
          <StaticImage
            src="../assets/image/img-profile.jpg"
            alt="Profile Image"
            placeholder="blurred"
            layout="fixed"
            width={96}
            height={96}
            style={{
              pointerEvents: 'none',
            }}
          />
        </Link>
        <Link
          as={GatsbyLink}
          to="/"
          variant="noeffect"
          display="block"
          mt="4"
          fontSize="medium"
          fontWeight="bold"
          textDecoration="none"
          transition="color 0.3s ease-in-out"
          _hover={{
            color: 'pink.400',
          }}
        >
          {config.auther.name}
        </Link>
        <Text mt="3" color={useColorModeValue('gray.600', 'white')} fontSize="md">
          {config.description}
        </Text>
      </Flex>

      <VStack gap={{ base: '2', md: '8' }} alignItems={{ base: 'flex-end', md: 'flex-start' }}>
        {/* Menu */}
        <UnorderedList padding="0" listStyleType="none" marginInlineStart="0" spacing="3">
          {config.menu.map((item) => (
            <ListItem key={item.path} listStyleType="none">
              <Link
                as={GatsbyLink}
                to={item.path}
                textDecoration="none"
                color={pathname == item.path ? 'pink.400' : useColorModeValue('gray.600', 'white')}
                fontSize="md"
                borderBottomColor={pathname == item.path ? 'pink.400' : 'transparent'}
                borderBottomWidth="1px"
                borderBottomStyle="solid"
                transition="all 0.3s ease-in-out"
                _hover={{
                  color: 'pink.400',
                  borderBottomColor: 'pink.400',
                }}
              >
                {item.label}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>

        {/* Social Icons */}
        <SimpleGrid mt="4" spacingX="4" spacingY="2" columns={3} display={{ base: 'none', md: 'grid' }}>
          <SocialIcon href={`https://github.com/${config.social.github}`} label="Link to Github">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href={`https://instagram.com/${config.social.instagram}`} label="Link to Instagram">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href={`https://linkedin.com/in/${config.social.linkedIn}`} label="Link to Linkedin">
            <FaLinkedinIn />
          </SocialIcon>
          <SocialIcon href={`https://github.com/${config.social.github}`} label="Link to RSS">
            <FaRss />
          </SocialIcon>
          <SocialIcon href={`mailto:${config.social.email}`} label="Write an Email">
            <FaEnvelope />
          </SocialIcon>
        </SimpleGrid>
        <IconButton
          display={{ base: 'none', md: 'flex' }}
          width="4"
          aria-label="Switch Color Mode"
          colorScheme="gray"
          onClick={toggleColorMode}
          isRound
          icon={colorMode === `light` ? <FaMoon /> : <FaSun />}
        />
      </VStack>
    </Grid>
  );
};

export default Navigation;
