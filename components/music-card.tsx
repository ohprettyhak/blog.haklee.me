import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import _ from 'lodash';
import {
  useColorModeValue,
  SimpleGrid,
  Box,
  Center,
  Link,
  Text,
  Image,
  keyframes,
  Skeleton,
  SkeletonCircle,
} from '@chakra-ui/react';

import { MusicDataType } from '@/types/now';

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

const TOP_ARTISTS_URL = `https://haklee-notes-api.web.app/spotify/top_artists`;

const MusicCard: React.FC = () => {
  const [data, setData] = useState<MusicDataType[]>();

  useEffect(() => {
    Axios.get(TOP_ARTISTS_URL)
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const startColor = useColorModeValue('gray.300', 'gitdark.light');
  const endColor = useColorModeValue('gray.400', 'gitdark.normal');

  return (
    <>
      <Box layerStyle="card">
        <Text variant="cardTitle">🎧 Recently Listened</Text>
        <SimpleGrid pt={2} columns={2} row={2} spacingX={2} spacingY={4} alignItems="center" justifyContent="center">
          {!data &&
            _.range(4).map((_, i: number) => (
              <Center mb="auto" textAlign="center" flexDirection="column" key={i}>
                <SkeletonCircle size="20" startColor={startColor} endColor={endColor} />
                <Skeleton w="50%" mt={2} height={5} startColor={startColor} endColor={endColor} />
              </Center>
            ))}
          {data &&
            data.map((artist: MusicDataType, i: number) => (
              <Center mb="auto" textAlign="center" flexDirection="column" key={i}>
                <Link href={artist.link} title={`Listen to ${artist.name} now on Spotify`} target="_blank">
                  <Box
                    w="20"
                    h="20"
                    role="group"
                    backgroundColor="blackAlpha.100"
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
                    <Image
                      position="absolute"
                      top="0"
                      left="0"
                      zIndex="1"
                      w="20"
                      h="20"
                      src={artist.image}
                      alt={artist.name}
                      borderRadius="50%"
                      _groupHover={{ opacity: 0.8 }}
                    />
                  </Box>
                </Link>
                <Text m="0" mt={2} fontSize="sm" lineHeight="short">
                  {artist.name}
                </Text>
              </Center>
            ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default MusicCard;
