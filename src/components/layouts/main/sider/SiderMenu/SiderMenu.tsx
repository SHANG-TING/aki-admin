import React from 'react';

import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import {
  DashboardOutlined,
  HomeOutlined,
  UserOutlined,
  BlockOutlined,
} from '@ant-design/icons';

import { sidebarNavigation, SidebarNavigationItem } from '../sidebarNavigation';
import * as S from './SiderMenu.styles';

interface SiderContentProps {
  setCollapsed: (isCollapsed: boolean) => void;
}

const sidebarNavFlat = sidebarNavigation.reduce(
  (result: SidebarNavigationItem[], current) =>
    result.concat(
      current.children && current.children.length > 0
        ? current.children
        : current
    ),
  []
);

const SiderMenu: React.FC<SiderContentProps> = ({ setCollapsed }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const items: ItemType[] = [
    {
      key: 'nft-dashboard',
      label: <Link to={'/'}>{t('common.nft-dashboard')}</Link>,
      icon: <DashboardOutlined />,
    },
    {
      key: 'apps',
      label: t('common.apps'),
      icon: <HomeOutlined />,
      children: [
        {
          key: 'feed',
          label: <Link to={'/apps/feed'}>{t('common.feed')}</Link>,
        },
      ],
    },
    {
      key: 'auth',
      label: t('common.authPages'),
      icon: <UserOutlined />,
      children: [
        {
          key: 'login',
          label: <Link to={'/auth/login'}>{t('common.login')}</Link>,
        },
        {
          key: 'signUp',
          label: <Link to={'/auth/sign-up'}>{t('common.signUp')}</Link>,
        },
        {
          key: 'lock',
          label: <Link to={'/auth/lock'}>{t('common.lock')}</Link>,
        },
        {
          key: 'securityCode',
          label: (
            <Link to={'/auth/security-code'}>{t('common.securityCode')}</Link>
          ),
        },
        {
          key: 'newPass',
          label: (
            <Link to={'/auth/new-password'}>{t('common.newPassword')}</Link>
          ),
        },
      ],
    },
    {
      key: 'ui',
      label: t('common.ui'),
      icon: <BlockOutlined />,
      children: [
        {
          key: 'alert',
          label: <Link to={'/ui-components/alert'}>{t('common.alert')}</Link>,
        },
        {
          key: 'avatar',
          label: <Link to={'/ui-components/avatar'}>{t('common.avatar')}</Link>,
        },
        {
          key: 'auto-complete',
          label: (
            <Link to={'/ui-components/auto-complete'}>
              {t('common.autocomplete')}
            </Link>
          ),
        },
        {
          key: 'badge',
          label: <Link to={'/ui-components/badge'}>{t('common.badge')}</Link>,
        },
        {
          key: 'breadcrumbs',
          label: (
            <Link to={'/ui-components/breadcrumbs'}>
              {t('common.breadcrumbs')}
            </Link>
          ),
        },
        {
          key: 'button',
          label: <Link to={'/ui-components/button'}>{t('common.button')}</Link>,
        },
        {
          key: 'checkbox',
          label: (
            <Link to={'/ui-components/checkbox'}>{t('common.checkbox')}</Link>
          ),
        },
        {
          key: 'collapse',
          label: (
            <Link to={'/ui-components/collapse'}>{t('common.collapse')}</Link>
          ),
        },
        {
          key: 'dateTimePicker',
          label: (
            <Link to={'/ui-components/date-time-picker'}>
              {t('common.dateTimePicker')}
            </Link>
          ),
        },
        {
          key: 'dropdown',
          label: (
            <Link to={'/ui-components/dropdown'}>{t('common.dropdown')}</Link>
          ),
        },
        {
          key: 'input',
          label: <Link to={'/ui-components/input'}>{t('common.input')}</Link>,
        },
        {
          key: 'modal',
          label: <Link to={'/ui-components/modal'}>{t('common.modal')}</Link>,
        },
        {
          key: 'notification',
          label: (
            <Link to={'/ui-components/notification'}>
              {t('common.notification')}
            </Link>
          ),
        },
        {
          key: 'pagination',
          label: (
            <Link to={'/ui-components/pagination'}>
              {t('common.pagination')}
            </Link>
          ),
        },
        {
          key: 'popconfirm',
          label: (
            <Link to={'/ui-components/popconfirm'}>
              {t('common.popconfirm')}
            </Link>
          ),
        },
        {
          key: 'popover',
          label: (
            <Link to={'/ui-components/popover'}>{t('common.popover')}</Link>
          ),
        },
        {
          key: 'progress',
          label: (
            <Link to={'/ui-components/progress'}>{t('common.progress')}</Link>
          ),
        },
        {
          key: 'radio',
          label: <Link to={'/ui-components/radio'}>{t('common.radio')}</Link>,
        },
        {
          key: 'rate',
          label: <Link to={'/ui-components/rate'}>{t('common.rate')}</Link>,
        },
        {
          key: 'result',
          label: <Link to={'/ui-components/result'}>{t('common.result')}</Link>,
        },
        {
          key: 'select',
          label: <Link to={'/ui-components/select'}>{t('common.select')}</Link>,
        },
        {
          key: 'skeleton',
          label: (
            <Link to={'/ui-components/skeleton'}>{t('common.skeleton')}</Link>
          ),
        },
        {
          key: 'spinner',
          label: (
            <Link to={'/ui-components/spinner'}>{t('common.spinner')}</Link>
          ),
        },
        {
          key: 'steps',
          label: <Link to={'/ui-components/steps'}>{t('common.steps')}</Link>,
        },
        {
          key: 'switch',
          label: <Link to={'/ui-components/switch'}>{t('common.switch')}</Link>,
        },
        {
          key: 'tabs',
          label: <Link to={'/ui-components/tabs'}>{t('common.tabs')}</Link>,
        },
        {
          key: 'upload',
          label: <Link to={'/ui-components/upload'}>{t('common.upload')}</Link>,
        },
      ],
    },
  ];

  const currentMenuItem = sidebarNavFlat.find(
    ({ url }) => url === location.pathname
  );
  const defaultSelectedKeys = currentMenuItem ? [currentMenuItem.key] : [];

  const openedSubmenu = sidebarNavigation.find(({ children }) =>
    children?.some(({ url }) => url === location.pathname)
  );
  const defaultOpenKeys = openedSubmenu ? [openedSubmenu.key] : [];

  return (
    <S.Menu
      mode="inline"
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      items={items}
      onClick={() => setCollapsed(true)}
    ></S.Menu>
  );
};

export default SiderMenu;
