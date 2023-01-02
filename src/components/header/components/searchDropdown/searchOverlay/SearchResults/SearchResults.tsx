import React, { useMemo } from 'react';

import { List } from 'antd';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

import { CategoryComponents } from '@app/components/header/components/HeaderSearch/HeaderSearch';
import { camelize } from '@app/utils/utils';

import * as S from './SearchResults.styles';

interface SearchResultsProps {
  results: CategoryComponents[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  const { t } = useTranslation();

  const resultsList = useMemo(
    () =>
      results.map((result) => (
        <List
          key={result.category}
          split={false}
          header={t(`common.${camelize(result.category)}`)}
          dataSource={result.components}
          renderItem={(item) => (
            <HashLink to={item.url}>
              <List.Item>
                <S.Text>{item.name}</S.Text>
              </List.Item>
            </HashLink>
          )}
        />
      )),
    [results, t]
  );

  return <S.SearchResultsWrapper>{resultsList}</S.SearchResultsWrapper>;
};
