import styled from 'styled-components';
import { Card } from '@app/components/common/Card/Card';
import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';

export const BloodScreeningCard = styled((props) => <Card {...props} />)`
  height: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActiveItem = styled.div`
  background: #ecf6ff;
  height: 3.125rem;
  border-radius: ${BORDER_RADIUS};
  padding: 0 1rem;
  display: flex;
  align-items: center;
  color: var(--primary-color);
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.semibold};
`;