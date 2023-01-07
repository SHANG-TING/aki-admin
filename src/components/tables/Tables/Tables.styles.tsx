import styled from 'styled-components';

import { Card as CommonCard } from '@app/components/common/Card/Card';

export const TablesWrapper = styled.div`
  margin-top: 1.875rem;
`;

export const Card = styled((props) => <CommonCard {...props} />)`
  margin-bottom: 2rem;
`;
