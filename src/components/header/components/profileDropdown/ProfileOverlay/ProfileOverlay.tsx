import React from 'react';

import type { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { DropdownMenu } from '@app/components/header/Header.styles';

import * as S from './ProfileOverlay.styles';

export const ProfileOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation();

  const items: MenuProps['items'] = [
    {
      key: 0,
      label: (
        <S.Text>
          <Link to="/profile">{t('profile.title')}</Link>
        </S.Text>
      ),
    },
    {
      key: 1,
      label: (
        <S.Text>
          <Link to="/logout">{t('header.logout')}</Link>
        </S.Text>
      ),
    },
  ];

  return (
    <DropdownMenu selectable={false} menu={{ items }} {...props}></DropdownMenu>
  );
};
