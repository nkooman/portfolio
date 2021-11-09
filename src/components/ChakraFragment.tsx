import { chakra, HTMLChakraProps } from '@chakra-ui/react';
import { FC } from 'react';

export const ChakraFragment: FC<HTMLChakraProps<'div'>> = ({ children, ...props }) => (
  <chakra.div display="contents" {...props}>{children}</chakra.div>
);
