import styled from 'styled-components';

import { Carousel } from '@app/components/common/Carousel/Carousel';

export const ScreeningsCarousel = styled((props) => <Carousel {...props} />)`
  margin: 0 1rem;

  .slick-disabled {
    display: none !important;
  }

  .slick-slide > div {
    display: flex;
    justify-content: center;
  }
`;
