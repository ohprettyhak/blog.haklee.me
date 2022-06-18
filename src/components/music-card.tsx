import React from 'react';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useColorModeValue, chakra, SimpleGrid, Box, Center, Link, Text, keyframes } from '@chakra-ui/react';

const CoverImage = chakra(GatsbyImage);

const bounce = keyframes`
  10% {
    transform: scaleY(0.3); /* start by scaling to 30% */
  }
  30% {
    transform: scaleY(1); /* scale up to 100% */
  }
  60% {
    transform: scaleY(0.5); /* scale down to 50% */
  }
  80% {
    transform: scaleY(0.75); /* scale up to 75% */
  }
  100% {
    transform: scaleY(0.6); /* scale down to 60% */
  }
`;

const animation = `${bounce} 2.2s ease infinite alternate`;

const MusicCard: React.FC = () => {
  const data = useStaticQuery(graphql`
    query MusicCardQuery {
      allSpotifyRecentTrack(limit: 4, sort: { fields: order }) {
        nodes {
          track {
            id
            name
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(height: 160, width: 160)
                }
              }
            }
            external_urls {
              spotify
            }
          }
        }
      }
    }
  `);

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
          🎧 Recently Listened
        </Text>
        <SimpleGrid columns={2} row={2} spacingX={2} spacingY={4} alignItems="center" justifyContent="center">
          {data.allSpotifyRecentTrack.nodes.map((music, index) => (
            <Center mb="auto" textAlign="center" flexDirection="column">
              <Link
                as={GatsbyLink}
                to={music.track.external_urls.spotify}
                title={`Listen to ${music.track.name} now on Spotify`}
                target="_blank"
                key={music.track.id}
              >
                <Box
                  w="80px"
                  h="80px"
                  role="group"
                  backgroundColor="black"
                  borderRadius="50%"
                  position="relative"
                  transition="all 0.1s ease-in-out"
                >
                  <Box
                    position="absolute"
                    zIndex="100"
                    top="26px"
                    left="26px"
                    opacity={0}
                    w="25px"
                    h="25px"
                    right="0"
                    bottom="0"
                    color="white"
                    transition="all 0.1s ease-in-out"
                    _groupHover={{ opacity: 1 }}
                  >
                    {/* <FaVolumeDown size="20px" /> */}
                    <Box position="relative" display="flex" justifyContent="space-between" width="30px" height="30px">
                      <Box
                        backgroundColor="white"
                        width="4px"
                        height="100%"
                        borderRadius="6px"
                        animation={animation}
                        transformOrigin="bottom"
                      />
                      <Box
                        backgroundColor="white"
                        width="4px"
                        height="100%"
                        borderRadius="6px"
                        animation={animation}
                        transformOrigin="bottom"
                        style={{ animationDelay: '-2.2s' }}
                      />
                      <Box
                        backgroundColor="white"
                        width="4px"
                        height="100%"
                        borderRadius="6px"
                        animation={animation}
                        transformOrigin="bottom"
                        style={{ animationDelay: '-3.7s' }}
                      />
                      <Box
                        backgroundColor="white"
                        width="4px"
                        height="100%"
                        borderRadius="6px"
                        animation={animation}
                        transformOrigin="bottom"
                        style={{ animationDelay: '-4.2s' }}
                      />
                    </Box>
                  </Box>
                  <CoverImage
                    position="absolute"
                    top="0"
                    left="0"
                    zIndex="1"
                    w="20"
                    h="20"
                    image={music.track.image.localFile.childImageSharp.gatsbyImageData}
                    alt={music.track.name}
                    borderRadius="50%"
                    _groupHover={{ opacity: 0.8 }}
                  />
                </Box>
              </Link>
              <Text m="0" mt={2} fontSize="sm" lineHeight="short">
                {music.track.name}
              </Text>
            </Center>
          ))}
        </SimpleGrid>
      </Box>
    </React.Fragment>
  );
};

export default MusicCard;
