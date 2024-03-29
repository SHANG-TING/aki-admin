import React from 'react';

import { RightOutlined } from '@ant-design/icons';
import logoDark from '@app/assets/logo-dark.png';
import logo from '@app/assets/logo.png';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { useResponsive } from '@app/hooks/useResponsive';

import * as S from './MainSider/MainSider.styles';
import { useTranslation } from 'react-i18next';

interface SiderLogoProps {
  isSiderCollapsed: boolean;
  toggleSider: () => void;
}
export const SiderLogo: React.FC<SiderLogoProps> = ({
  isSiderCollapsed,
  toggleSider,
}) => {
  const { tabletOnly } = useResponsive();

  const theme = useAppSelector((state) => state.theme.theme);
  const { t } = useTranslation();
  const img = theme === 'dark' ? logoDark : logo;

  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink to="/">
        <img src={img} alt="Lightence" width={48} height={48} />
        <S.BrandSpan>{t('title')}</S.BrandSpan>
      </S.SiderLogoLink>
      {tabletOnly && (
        <S.CollapseButton
          shape="circle"
          size="small"
          $isCollapsed={isSiderCollapsed}
          icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
          onClick={toggleSider}
        />
      )}
    </S.SiderLogoDiv>
  );
};
