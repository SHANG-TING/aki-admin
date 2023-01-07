import styled from 'styled-components';

import { SearchOutlined } from '@ant-design/icons';
import { Button } from '@app/components/common/buttons/Button/Button';
import { SearchInput } from '@app/components/common/inputs/SearchInput/SearchInput';
import { Modal } from '@app/components/common/Modal/Modal';
import { BORDER_RADIUS, media } from '@app/styles/themes/constants';

export const SearchIcon = styled((props) => <SearchOutlined {...props} />)`
  &.anticon.anticon-search {
    display: block;
    font-size: 1.25rem;

    @media only screen and ${media.md} {
      font-size: 1.625rem;
    }
  }
`;

export const InputSearch = styled((props) => <SearchInput {...props} />)`
  .ant-input-group-addon {
    display: none;
  }

  @media only screen and ${media.md} {
    .ant-input-group .ant-input-affix-wrapper:not(:last-child) {
      border-radius: 3.125rem;
      border: 0;
      padding: 0.5625rem 1.25rem;
    }
  }
`;

export const SearchModal = styled((props) => <Modal {...props} />)`
  border-radius: ${BORDER_RADIUS};

  & .ant-modal-body {
    padding: 0;
  }
`;

export const Btn = styled((props) => <Button {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
