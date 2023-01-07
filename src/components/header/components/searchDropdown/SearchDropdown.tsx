import React, { useEffect, useRef, useState } from 'react';

import { FilterIcon } from '@app/components/common/icons/FilterIcon';
import { useTranslation } from 'react-i18next';

import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { CategoryComponents } from '@app/components/header/components/HeaderSearch/HeaderSearch';
import { HeaderActionWrapper } from '@app/components/header/Header.styles';

import { Btn, InputSearch } from '../HeaderSearch/HeaderSearch.styles';
import { SearchOverlay } from './searchOverlay/SearchOverlay/SearchOverlay';

interface SearchOverlayProps {
  query: string;
  setQuery: (query: string) => void;
  data: CategoryComponents[] | null;
  isOverlayVisible: boolean;
  setOverlayVisible: (state: boolean) => void;
}

export const SearchDropdown: React.FC<SearchOverlayProps> = ({
  query,
  setQuery,
  data,
  isOverlayVisible,
  setOverlayVisible,
}) => {
  const [isFilterVisible, setFilterActive] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    setOverlayVisible(!!query || isFilterVisible);
  }, [query, isFilterVisible, setOverlayVisible]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const items = [
    {
      key: 'item-1',
      label: <SearchOverlay data={data} isFilterVisible={isFilterVisible} />,
    },
  ];

  return (
    <Dropdown
      {...((!!data || isFilterVisible) && {
        trigger: ['click'],
        onOpenChange: setOverlayVisible,
      })}
      overlayClassName="search-dropdown"
      menu={{ items }}
      open={isOverlayVisible}
      getPopupContainer={() => ref.current}
    >
      <HeaderActionWrapper>
        <InputSearch
          width="100%"
          value={query}
          placeholder={t('header.search') || ''}
          filter={
            <Btn
              size="small"
              type={isFilterVisible ? 'ghost' : 'text'}
              aria-label="Filter"
              icon={<FilterIcon />}
              onClick={() => setFilterActive(!isFilterVisible)}
            />
          }
          onChange={(event) => setQuery(event.target.value)}
          enterButton={null}
          addonAfter={null}
        />
        <div ref={ref} />
      </HeaderActionWrapper>
    </Dropdown>
  );
};
