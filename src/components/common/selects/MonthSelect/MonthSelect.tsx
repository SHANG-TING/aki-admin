import React, { useMemo } from 'react';

import { Dates } from '@app/constants/Dates';

import { Option, Select, SelectProps } from '../Select/Select';

export const MonthSelect: React.FC<SelectProps> = ({ className, ...props }) => {
  const months = Dates.getMonths();

  const monthsOptions = useMemo(
    () =>
      months.map((month, index) => (
        <Option key={index} value={index}>
          {month}
        </Option>
      )),
    [months]
  );

  return (
    <Select className={className} {...props}>
      {monthsOptions}
    </Select>
  );
};
