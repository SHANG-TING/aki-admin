import styled from 'styled-components';
import { Radio as AntdRadio } from 'antd';

export const Radio = styled((props) => <AntdRadio {...props} />)`
  .ant-radio-disabled + span {
    color: var(--disabled-color);
  }
`;

export const RadioButton = styled((props) => <AntdRadio.Button {...props} />)`
  &.ant-radio-button-wrapper-disabled {
    color: var(--disabled-color);
  }
`;
