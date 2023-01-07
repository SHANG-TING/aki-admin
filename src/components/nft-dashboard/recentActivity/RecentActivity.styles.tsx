import { Col, Typography } from 'antd';
import styled from 'styled-components';

export const StatusText = styled((props) => <Typography.Text {...props} />)``;

export const Text = styled((props) => <Typography.Text {...props} />)``;

export const FilterCol = styled((props) => <Col {...props} />)`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
