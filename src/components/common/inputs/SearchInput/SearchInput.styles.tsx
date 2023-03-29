import { Input, Space as AntSpace } from 'antd';
import { SearchProps } from 'antd/lib/input';
import styled from 'styled-components';

import { FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';

const { Search } = Input;

export const SearchInput = styled((props: SearchProps) => (
  <Search {...props} />
))`
  & .ant-input-prefix {
    margin: 0.5rem;
  }

  & .ant-input-search-button {
    height: 3.1275rem;
    box-shadow: none;
  }

  &.ant-input-search-small .ant-input-search-button {
    height: 1.975rem;
  }

  &.ant-input-search-large .ant-input-search-button {
    height: 4rem;
  }

  & input {
    font-weight: 600;
    background-color: var(--background-color);

    @media only screen and (${media.md}) {
      font-size: 1rem;
    }

    &::placeholder {
      font-weight: 500;
    }
  }

  .ant-input-group-addon {
    min-width: 5.5rem;
    color: var(--primary-color);
    font-weight: ${FONT_WEIGHT.semibold};
    font-size: ${FONT_SIZE.lg};
  }

  .ant-input-search-button {
    &.ant-btn .anticon {
      color: var(--primary-color);
    }
    width: 100%;
    background-color: rgba(1, 80, 154, 0.05);
    border: 1px solid var(--border-color);
    color: var(--primary-color);
  }
`;

export const Space = styled((props) => <AntSpace {...props} />)`
  & > .ant-space-item:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
