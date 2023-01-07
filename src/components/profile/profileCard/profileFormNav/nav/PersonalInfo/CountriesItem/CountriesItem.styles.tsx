import { Space } from 'antd';
import styled from 'styled-components';

export const CountriesSpace = styled((props) => <Space {...props} />)`
  width: 100%;

  & > .ant-space-item:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
