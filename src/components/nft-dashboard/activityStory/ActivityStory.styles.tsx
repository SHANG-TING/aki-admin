import { FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';
import { Row, Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled((props) => <Typography.Title {...props} />)`
  &.ant-typography {
    margin-bottom: 0;

    font-weight: ${FONT_WEIGHT.semibold};

    font-size: ${FONT_SIZE.xs};
  }
`;

export const ActivityRow = styled((props) => <Row {...props} />)`
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 100%;
`;
