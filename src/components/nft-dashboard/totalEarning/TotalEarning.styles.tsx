import { FONT_SIZE, FONT_WEIGHT, FONT_FAMILY } from '@app/styles/themes/constants';
import { Typography } from 'antd';
import styled from 'styled-components';

interface ValueTextProps {
  $color: 'success' | 'error';
}

export const Title = styled((props) => <Typography.Title {...props} />)`
  &.ant-typography {
    margin-bottom: 0;

    font-size: ${FONT_SIZE.xs};
  }
`;

export const Text = styled((props) => <Typography.Text {...props} />)`
  font-size: ${FONT_SIZE.xs};

  font-weight: ${FONT_WEIGHT.regular};

  font-family: ${FONT_FAMILY.secondary};
`;

export const ValueText = styled((props) => <Typography.Text {...props} />)<ValueTextProps>`
  font-size: ${FONT_SIZE.xs};

  font-family: ${FONT_FAMILY.secondary};

  color: ${(props) => `var(--${props.$color}-color)`};
`;
