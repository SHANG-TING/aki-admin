import React, { useMemo } from 'react';

import { Avatar } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { useTranslation } from 'react-i18next';

import { Payment } from '@app/api/paymentHistory.api';
import { Button } from '@app/components/common/buttons/Button/Button';
import { Dates } from '@app/constants/Dates';
import { PaymentStatus, paymentStatuses } from '@app/constants/paymentStatuses';
import { defineColorByPriority, getCurrencyPrice } from '@app/utils/utils';

import { Status } from '../Status/Status';
import * as S from './PaymentsTable.styles';

interface Recipient {
  name: string;
  img: string;
}

interface Status {
  key: number;
  recipient: Recipient;
  date: number;
  status: PaymentStatus | undefined;
  totalAmount: string | React.ReactNode;
}

interface PaymentsTableProps {
  payments: Payment[];
}

export const PaymentsTable: React.FC<PaymentsTableProps> = ({ payments }) => {
  const { t } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: ColumnType<any>[] = useMemo(() => {
    return [
      {
        title: t('profile.nav.payments.recipient'),
        dataIndex: 'recipient',
        key: 'recipient',
        render: (recipient: Recipient) => (
          <S.RecipientWrapper>
            <Avatar src={recipient.img} alt={recipient.name} />
            {recipient.name}
          </S.RecipientWrapper>
        ),
        align: 'center',
      },
      {
        title: t('profile.nav.payments.date'),
        dataIndex: 'date',
        key: 'date',
        render: (text: string) => Dates.format(text, 'LL'),
        sorter: (a, b) => a.date - b.date,
        align: 'center',
      },
      {
        title: t('profile.nav.payments.status.title'),
        dataIndex: 'status',
        key: 'status',
        render: (status: PaymentStatus) => (
          <Status
            color={defineColorByPriority(status.priority)}
            text={t(status.name).toUpperCase()}
          />
        ),
        align: 'center',
      },
      {
        title: t('profile.nav.payments.totalAmount'),
        dataIndex: 'totalAmount',
        key: 'totalAmount',
        align: 'center',
      },
      {
        title: '',
        dataIndex: 'details',
        key: 'details',
        align: 'center',
        render: () => (
          <Button type="link">{t('profile.nav.payments.details')}</Button>
        ),
      },
    ];
  }, [t]);

  const dataSource: Status[] = useMemo(
    () =>
      payments.map((payment, index) => {
        return {
          key: index,
          recipient: {
            name: payment.recipient,
            img: payment.imgUrl,
          },
          date: payment.date,
          status: paymentStatuses.find(
            (status) => status.id === payment.status
          ),
          totalAmount: getCurrencyPrice(payment.amount, payment.currency),
          details: payment,
        };
      }),
    [payments]
  );

  return (
    <S.PaymentHistoryTable
      size="middle"
      columns={columns}
      dataSource={dataSource}
      pagination={false}
    />
  );
};
