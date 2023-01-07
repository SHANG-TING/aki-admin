import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import { Rate, Typography } from 'antd';
import styled from 'styled-components';
import { Card } from '../../../common/Card/Card';

export const DoctorCard = styled((props) => <Card {...props} />)`
  margin: 1rem;
`;

export const Title = styled((props) => <Typography.Text {...props} />)`
  font-size: ${FONT_SIZE.xxs};

  font-weight: ${FONT_WEIGHT.medium};

  color: var(--primary-color);

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.xs};
  }

  @media only screen and ${media.xxl} {
    font-size: ${FONT_SIZE.md};
  }
`;

export const Text = styled((props) => <Typography.Text {...props} />)`
  font-size: ${FONT_SIZE.xs};

  font-weight: ${FONT_WEIGHT.semibold};

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.md};
  }

  @media only screen and ${media.xxl} {
    font-size: ${FONT_SIZE.lg};
  }
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  margin: -1rem -1rem 0;

  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};

  & > div {
    display: block;
  }
`;

export const Rating = styled((props) => <Rate {...props} />)`
  display: flex;
  font-size: ${FONT_SIZE.xxs};

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.lg};
  }
`;
