import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { useLocation } from '@reach/router';
import { StaticImage } from 'gatsby-plugin-image';
import { Grid, Flex, VStack, UnorderedList, ListItem, SimpleGrid, Link, Text } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaRss, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';

import config from '../../config';
import SocialIcon from './social-icon';

const Navigation: React.FC = () => {
  const { pathname } = useLocation();

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
        <Link as={GatsbyLink} to="/" display="inline-block" color="transparent" textDecoration="none">
          <StaticImage
            src="../assets/image/img-profile.jpg"
            alt="Profile Image"
            placeholder="blurred"
            layout="fixed"
            width={96}
            height={96}
            style={{
              overflow: 'hidden',
              borderRadius: '50%',
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
          fontFamily="body"
          textDecoration="none"
          transition="color 0.3s ease-in-out"
          color="gray.900"
          _hover={{
            color: 'pink.400',
          }}
        >
          {config.auther.name}
        </Link>
        <Text mt="3" color="gray.600" fontSize="md" fontFamily="body">
          {config.description}
        </Text>
      </Flex>

      <VStack
        gap={{ base: '2', md: '8' }}
        alignItems={{ base: 'flex-end', md: 'flex-start' }}
        mt={{ base: 'auto', md: '0' }}
      >
        {/* Menu */}
        <UnorderedList padding="0" listStyleType="none" marginInlineStart="0" spacing="3">
          {config.menu.map((item) => (
            <ListItem key={item.path} listStyleType="none">
              <Link
                as={GatsbyLink}
                to={item.path}
                textDecoration="none"
                color={pathname == item.path ? 'pink.400' : 'gray.600'}
                fontSize="md"
                fontFamily="body"
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
      </VStack>
    </Grid>
  );
};

export default Navigation;
