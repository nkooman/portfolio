import { FC } from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';
import { ChakraFragment } from './ChakraFragment';

interface Props extends HeadingProps {
  highlightColor?: string;
}

export const HeadingHighlight: FC<Props> = ({ highlightColor, children, ...props }) => (
  <ChakraFragment sx={{ '--highlight-color': highlightColor ?? 'colors.salmon' }}>
    <Heading
      position="relative"
      isolation="isolate"
      _after={{
        content: '""',
        height: '30%',
        width: '75%',
        transform: 'translateY(-20%)',
        zIndex: -1,
        bottom: 0,
        left: '-5%',
        position: 'absolute',
        backgroundColor: 'var(--highlight-color)',
        filter: 'brightness(0.8)'
      }}
     {...props}
     >{children}</Heading>
  </ChakraFragment>
);
