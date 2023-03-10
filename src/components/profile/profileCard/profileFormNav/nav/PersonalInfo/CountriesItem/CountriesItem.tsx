import React from 'react';

import countryList from 'country-list';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { Option, Select } from '@app/components/common/selects/Select/Select';

import * as S from './CountriesItem.styles';

const countries = countryList.getData();

const selectOptions = countries.map((country) => (
  <Option key={country.name} value={country.code}>
    <S.CountriesSpace align="center">
      <ReactCountryFlag countryCode={country.code} svg alt="country flag" />
      {country.name}
    </S.CountriesSpace>
  </Option>
));

export const CountriesItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item name="country" label={t('common.country')}>
      <Select
        showSearch
        filterOption={(input, option) =>
          option?.value.toLowerCase().includes(input.toLowerCase())
        }
      >
        {selectOptions}
      </Select>
    </BaseButtonsForm.Item>
  );
};
