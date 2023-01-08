import React from 'react';

import { Col, Row } from 'antd';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import { useResponsive } from '@app/hooks/useResponsive';

import * as S from './DashboardPage.styles';

const MedicalDashboardPage: React.FC = () => {
  const { isDesktop } = useResponsive();

  const desktopLayout = (
    <Row>
      <S.LeftSideCol xl={16} xxl={17} id="desktop-content">
        <Row gutter={[60, 60]}>
          <Col span={24}></Col>

          <Col span={24}></Col>

          <Col span={24}></Col>

          <Col span={24}></Col>
        </Row>
        <References />
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={7}>
        <div id="balance"></div>
        <S.Space />
        <div id="total-earning"></div>
        <S.Space />
        <S.ScrollWrapper id="activity-story"></S.ScrollWrapper>
      </S.RightSideCol>
    </Row>
  );

  const mobileAndTabletLayout = (
    <Row gutter={[20, 24]}>
      <Col span={24}></Col>

      <Col span={24}></Col>

      <Col span={24}></Col>

      <Col span={24}></Col>
    </Row>
  );

  return (
    <>
      <PageTitle>NFT Dashboard</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default MedicalDashboardPage;
