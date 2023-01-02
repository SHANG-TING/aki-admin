import React from 'react';

import { useTranslation } from 'react-i18next';

import notFoundImg from '@app/assets/images/nothing-found.webp';

import { Card } from '../../../common/Card/Card';
import * as S from './TreatmentNotFound.styles';

export const TreatmentNotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card padding="1rem">
      <S.CardBody>
        <S.Image src={notFoundImg} alt="Not found" preview={false} />
        <S.Text>{t('medical-dashboard.treatmentPlan.noVisits')}</S.Text>
      </S.CardBody>
    </Card>
  );
};
