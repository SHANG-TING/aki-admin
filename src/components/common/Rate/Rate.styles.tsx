import styled from 'styled-components';
import { Rate as AntdRate } from 'antd';
import { FONT_SIZE } from '@app/styles/themes/constants';

export const Rate = styled((props) => <AntdRate {...props} />)`
  font-size: ${FONT_SIZE.lg};
`;
