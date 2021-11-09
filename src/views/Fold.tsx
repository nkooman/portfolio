import { FC } from 'react';
import { Box, Text, VStack, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { HeadingHighlight } from '../components/HeadingHighlight';

export const Fold: FC = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <VStack spacing={8}>
        <HeadingHighlight fontSize={{ base: '3xl', sm: '5xl', md: '7xl', lg: '9xl' }}>
          Nick Kooman
        </HeadingHighlight>
        <Text fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}>Full stack web developer.</Text>
        <Text fontSize={{ base: 'lg', md: '2xl' }}>
          Made with ❤
          <br />
          using React and Chakra UI.
        </Text>
      </VStack>
    </Grid>
  </Box>
);
