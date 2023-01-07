import { InputNumber as AntInputNumber } from 'antd';
import styled from 'styled-components';

interface InputNumberProps {
  $block?: boolean;
}

export const InputNumber = styled((props) => (
  <AntInputNumber {...props} />
)).withConfig({
  shouldForwardProp: (prop) => !['block'].includes(prop.toString()),
})<InputNumberProps>`
  ${(props) => props.$block && 'display: block; width: 100%'};
`;
