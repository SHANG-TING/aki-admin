import styled from 'styled-components';

import { Card as CommonCard } from '@app/components/common/Card/Card';
import { Collapse } from '@app/components/common/Collapse/Collapse';

export const Card = styled((props) => <CommonCard {...props} />)`
  width: 100%;
  margin-bottom: 1.25rem;
  .ant-card-head-title {
    font-size: 1rem;
  }
  .ant-card-body {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    align-items: center;
  }
  .ant-card-body:before {
    display: none;
  }
  .ant-card-body:after {
    display: none;
  }
  &.ant-card-bordered {
    border: 1px solid var(--border-color);
  }
`;

export const InputsWrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CollapseWrapper = styled((props) => <Collapse {...props} />)`
  width: 40rem;
`;
