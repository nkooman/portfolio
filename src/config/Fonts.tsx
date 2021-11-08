import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Nagoda";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Nagoda')
            url("./fonts/Nagoda.ttf") format("truetype"),
      }


      @font-face {
        font-family: "Magnolia";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Magnolia')
            url("./fonts/Magnolia.ttf") format("truetype"),
      }
    `}
  />
);
