import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import * as S from './SiderMenu.styles';
import { sidebarNavigation, SidebarNavigationItem } from '../sidebarNavigation';
import { Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import {
  CompassOutlined,
  DashboardOutlined,
  FormOutlined,
  HomeOutlined,
  LayoutOutlined,
  LineChartOutlined,
  TableOutlined,
  UserOutlined,
  BlockOutlined,
} from '@ant-design/icons';
import { ReactComponent as NftIcon } from '@app/assets/icons/nft-icon.svg';

interface SiderContentProps {
  setCollapsed: (isCollapsed: boolean) => void;
}

const sidebarNavFlat = sidebarNavigation.reduce(
  (result: SidebarNavigationItem[], current) =>
    result.concat(current.children && current.children.length > 0 ? current.children : current),
  [],
);

const SiderMenu: React.FC<SiderContentProps> = ({ setCollapsed }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const items: ItemType[] = [
  {
    key: 'nft-dashboard',
    label: (<Link to={'/'}>{t('common.nft-dashboard')}</Link>),
    icon:  <NftIcon />,
  },
  {
    key: 'medical-dashboard',
    label: (<Link to={'/medical-dashboard'}>{t('common.medical-dashboard')}</Link>),
    icon:  <DashboardOutlined />,
  },
  {
    key: 'apps',
    label: t('common.apps'),
    icon:  <HomeOutlined />,
    children: [
      {
        key: 'feed',
        label: (<Link to={'/apps/feed'}>{t('common.feed')}</Link>),
      },
      {
        key: 'kanban',
        label: (<Link to={'/apps/kanban'}>{t('common.kanban')}</Link>),
      }
    ]
  },
  {
    key: 'auth',
    label: t('common.authPages'),
    icon:  <UserOutlined />,
    children: [
      {
        key: 'login',
        label: (<Link to={'/auth/login'}>{t('common.login')}</Link>),
      },
      {
        key: 'signUp',
        label: (<Link to={'/auth/sign-up'}>{t('common.signUp')}</Link>),
      },
      {
        key: 'lock',
        label: (<Link to={'/auth/lock'}>{t('common.lock')}</Link>),
      },
      {
        key: 'securityCode',
        label: (<Link to={'/auth/security-code'}>{t('common.securityCode')}</Link>),
      },
      {
        key: 'newPass',
        label: (<Link to={'/auth/new-password'}>{t('common.newPassword')}</Link>),
      },
    ]
  }
];

  const currentMenuItem = sidebarNavFlat.find(({ url }) => url === location.pathname);
  const defaultSelectedKeys = currentMenuItem ? [currentMenuItem.key] : [];

  const openedSubmenu = sidebarNavigation.find(({ children }) =>
    children?.some(({ url }) => url === location.pathname),
  );
  const defaultOpenKeys = openedSubmenu ? [openedSubmenu.key] : [];

  return (
    <S.Menu
      mode="inline"
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      items={items}
      onClick={() => setCollapsed(true)}
    >
    </S.Menu>
  );
};

export default SiderMenu;
