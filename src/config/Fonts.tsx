import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Nagoda';
        src: local('Nagoda'), local('NagodaRegular'),
          url('assets/fonts/Nagoda/Nagoda.woff2') format('woff2'),
          url('assets/fonts/Nagoda/Nagoda.woff') format('woff'),
          url('assets/fonts/Nagoda/Nagoda.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Magnolia';
        src: local('Magnolia'), local('OriginalMagnolia')
          url('assets/fonts/Magnolia/Magnolia.woff2') format('woff2'),
          url('assets/fonts/Magnolia/Magnolia.woff') format('woff'),
          url('assets/fonts/Magnolia/Magnolia.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `}
  />
);
