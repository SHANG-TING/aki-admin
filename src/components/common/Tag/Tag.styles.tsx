import styled from 'styled-components';

import { CloseOutlined } from '@ant-design/icons';
import { FONT_SIZE } from '@app/styles/themes/constants';

export const RemoveTagWrapper = styled.span`
  padding-left: 0.3125rem;
  display: flex;
  align-items: center;
  padding-top: 1px;
`;

export const RemoveTagIcon = styled((props) => <CloseOutlined {...props} />)`
  color: #ffffff;
  font-size: ${FONT_SIZE.xxs};
  cursor: pointer;
`;

export const TagSpan = styled.span`
  padding: 2px 3px;
  border-radius: 3px;
  margin: 2px 5px;
  font-size: 70%;
`

export const TagWrapper = styled((props) => <TagSpan {...props} />)`
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3125rem 0.625rem;
  margin: 0;
  font-size: ${FONT_SIZE.xs};
`;
