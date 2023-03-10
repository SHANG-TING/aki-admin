import React, { useMemo } from 'react';

import { Avatar } from 'antd';
import { useTranslation } from 'react-i18next';

import { Button } from '@app/components/common/buttons/Button/Button';
import { Dates } from '@app/constants/Dates';
import { paymentStatuses } from '@app/constants/paymentStatuses';
import { CurrencyType } from '@app/interfaces/interfaces';
import { defineColorByPriority, getCurrencyPrice } from '@app/utils/utils';

import { Status } from '../Status/Status';
import * as S from './Payment.styles';

interface PaymentProps {
  src: string;
  recipient: string;
  date: number;
  status: number;
  price: number;
  currency: CurrencyType;
}

export const Payment: React.FC<PaymentProps> = ({
  src,
  recipient,
  date,
  status,
  price,
  currency,
}) => {
  const { t } = useTranslation();

  const paymentStatus = useMemo(
    () => paymentStatuses.find((item) => item.id === status),
    [status]
  );

  return paymentStatus ? (
    <>
      <S.Header>
        <S.AvatarWrapper>
          <Avatar src={src} alt={recipient} shape="circle" />
        </S.AvatarWrapper>
        <S.Text>{recipient}</S.Text>
      </S.Header>
      <S.ContentWrapper>
        <S.Item>
          <S.Subtitle>{t('profile.nav.payments.date')}</S.Subtitle>
          <S.Text>{Dates.format(date, 'LL')}</S.Text>
        </S.Item>
        <S.Item>
          <S.Subtitle>{t('profile.nav.payments.status.title')}</S.Subtitle>
          <Status
            color={defineColorByPriority(paymentStatus.priority)}
            text={t(paymentStatus.name)}
          />
        </S.Item>
        <S.Item>
          <S.Subtitle>{t('profile.nav.payments.date')}</S.Subtitle>
          <S.Text>{getCurrencyPrice(price, currency)}</S.Text>
        </S.Item>
      </S.ContentWrapper>
      <S.DetailsWrapper>
        <Button type="link">{t('profile.nav.payments.details')}</Button>
      </S.DetailsWrapper>
    </>
  ) : null;
};
