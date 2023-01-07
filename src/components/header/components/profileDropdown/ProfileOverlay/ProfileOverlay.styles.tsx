import { Divider, Typography } from 'antd';
import styled from 'styled-components';

import { MenuItem as MenuItemBase } from '@app/components/common/Menu/Menu';
import { media } from '@app/styles/themes/constants';

export const Text = styled((props) => <Typography.Text {...props} />)`
  font-size: 0.875rem;
  font-weight: 600;

  & > a {
    display: block;
  }

  @media only screen and ${media.md} {
    font-size: 1rem;
  }
`;

export const MenuItem = styled((props) => <MenuItemBase {...props} />)`
  height: 50px;
`;

export const ItemsDivider = styled((props) => (
  <Divider {...props} />
)).withConfig({
  shouldForwardProp: (prop) =>
    !['eventKey', 'warnKey'].includes(prop.toString()),
})`
  margin: 0;
`;
