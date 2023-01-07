import { Alert as AntAlert } from 'antd';
import styled from 'styled-components';

export const Alert = styled((props) => <AntAlert {...props} />)`
  color: var(--black);

  .ant-alert-message {
    color: var(--black);
  }
`;
