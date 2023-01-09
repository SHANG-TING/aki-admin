import React, { useEffect, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { FilterIcon } from '@app/components/common/icons/FilterIcon';
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

  return (
    <Dropdown
      {...((!!data || isFilterVisible) && {
        trigger: ['click'],
        onOpenChange: setOverlayVisible,
      })}
      dropdownRender={() => (
        <SearchOverlay data={data} isFilterVisible={isFilterVisible} />
      )}
      getPopupContainer={() => ref.current}
      overlayClassName="search-dropdown"
      open={isOverlayVisible}
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
          onChange={(event: any) => setQuery(event.target?.value)}
          enterButton={null}
          addonAfter={null}
        />
        <div ref={ref} />
      </HeaderActionWrapper>
    </Dropdown>
  );
};
