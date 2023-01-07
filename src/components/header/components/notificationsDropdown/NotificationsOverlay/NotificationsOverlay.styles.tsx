import { Divider, Row, Typography } from 'antd';
import styled from 'styled-components';

import { Button } from '@app/components/common/buttons/Button/Button';
import { DropdownMenu } from '@app/components/header/Header.styles';
import { media } from '@app/styles/themes/constants';

export const MenuRow = styled((props) => <Row {...props} />).withConfig({
  shouldForwardProp: (prop) =>
    !['eventKey', 'warnKey'].includes(prop.toString()),
})``;

export const NoticesOverlayMenu = styled((props) => (
  <DropdownMenu {...props} />
))`
  padding: 12px 16px;
  max-width: 15rem;
  border-right: 0;

  @media only screen and ${media.md} {
    max-width: 25rem;
  }
`;

export const SplitDivider = styled((props) => <Divider {...props} />)`
  margin: 0 0.5rem;
`;

export const LinkBtn = styled((props) => <Button {...props} />)`
  &.ant-btn {
    padding: 0;
    font-size: 0.875rem;
    height: unset;
    line-height: unset;
  }
`;

export const Btn = styled((props) => <Button {...props} />)`
  width: 100%;
`;

export const Text = styled((props) => <Typography.Text {...props} />)`
  display: block;
  text-align: center;
`;
