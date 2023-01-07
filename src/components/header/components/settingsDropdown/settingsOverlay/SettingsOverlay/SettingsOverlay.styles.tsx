import styled from 'styled-components';
import { DropdownMenu } from '@app/components/header/Header.styles';
import { Radio } from 'antd';

export const SettingsOverlayMenu = styled((props) => <DropdownMenu {...props} />)`
  width: 13rem;
`;

export const RadioBtn = styled((props) => <Radio {...props} />)`
  font-size: 0.875rem;
`;

export const PwaInstallWrapper = styled.div`
  padding: 0 1rem 0.75rem;
`;
