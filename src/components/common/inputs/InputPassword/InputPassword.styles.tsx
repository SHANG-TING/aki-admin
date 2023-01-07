import styled from 'styled-components';
import { Input as AntInput } from 'antd';

export const InputPassword = styled((props) => <AntInput.Password {...props} />)`
  .ant-input-password-icon.anticon {
    color: var(--disabled-color);
    &:hover {
      color: var(--text-main-color);
    }
  }
`;
