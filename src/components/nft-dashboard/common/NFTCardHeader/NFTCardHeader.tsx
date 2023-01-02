import React from 'react';

import { Col } from 'antd';

import { WithChildrenProps } from '@app/types/generalTypes';

import * as S from './NFTCardHeader.styles';

interface NFTCardHeaderProps {
  title: string;
}

export const NFTCardHeader: React.FC<WithChildrenProps<NFTCardHeaderProps>> = ({
  title,
  children,
}) => {
  return (
    <S.WrapperRow justify="space-between">
      <Col>
        <S.Title level={5}>{title}</S.Title>
      </Col>

      {children && <Col>{children}</Col>}
    </S.WrapperRow>
  );
};
