import styled from 'styled-components';
import { Layout } from 'antd';
import { media } from '@app/styles/themes/constants';

export const LayoutMaster = styled((props) => <Layout {...props} />)`
  height: 100vh;
`;

export const LayoutMain = styled((props) => <Layout {...props} />)`
  @media only screen and ${media.md} {
    margin-left: 80px;
  }

  @media only screen and ${media.xl} {
    margin-left: unset;
  }
`;
