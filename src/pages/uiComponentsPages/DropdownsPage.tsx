import { Col, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { Menu, MenuItem } from '@app/components/common/Menu/Menu';
import { Button } from '@app/components/common/buttons/Button/Button';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

const ContextMenuWrapper = styled.div`
  height: 12.5rem;
  width: 18.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgrey;
`;

const DropdownsPage: React.FC = () => {
  const { t } = useTranslation();

  const basicMenu = (
    <Menu>
      <MenuItem>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('dropdowns.firstItem')}
        </Button>
      </MenuItem>
      <MenuItem icon={<DownOutlined />} disabled>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('dropdowns.secondItem')} ({t('dropdowns.disabled')})
        </Button>
      </MenuItem>
      <MenuItem disabled>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('dropdowns.thirdItem')} ({t('dropdowns.disabled')})
        </Button>
      </MenuItem>
      <MenuItem danger>{t('dropdowns.dangerItem')}</MenuItem>
    </Menu>
  );
  const basicItems = [{ key: 'item-1', label: basicMenu }];

  const positionMenu = (
    <Menu>
      <MenuItem>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('dropdowns.firstItem')}
        </Button>
      </MenuItem>
      <MenuItem>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('dropdowns.secondItem')}
        </Button>
      </MenuItem>
      <MenuItem>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('dropdowns.thirdItem')}
        </Button>
      </MenuItem>
    </Menu>
  );
  const positionItems = [{ key: 'item-1', label: positionMenu }];

  return (
    <>
      <PageTitle>{t('common.dropdown')}</PageTitle>
      <Col>
        <S.Card title={t('dropdowns.basic')}>
          <Dropdown menu={{ items: basicItems }}>
            <Button onClick={(e) => e.preventDefault()}>
              {t('dropdowns.hoverMe')} <DownOutlined />
            </Button>
          </Dropdown>
        </S.Card>
        <S.Card title={t('dropdowns.positions')}>
          <Space size={16} wrap>
            <Dropdown
              menu={{ items: positionItems }}
              placement="bottomLeft"
              arrow
            >
              <Button>{t('dropdowns.bl')}</Button>
            </Dropdown>
            <Dropdown
              menu={{ items: positionItems }}
              placement="bottomCenter"
              arrow
            >
              <Button>{t('dropdowns.bc')}</Button>
            </Dropdown>
            <Dropdown
              menu={{ items: positionItems }}
              placement="bottomRight"
              arrow
            >
              <Button>{t('dropdowns.br')}</Button>
            </Dropdown>
            <Dropdown menu={{ items: positionItems }} placement="topLeft" arrow>
              <Button>{t('dropdowns.tl')}</Button>
            </Dropdown>
            <Dropdown
              menu={{ items: positionItems }}
              placement="topCenter"
              arrow
            >
              <Button>{t('dropdowns.tc')}</Button>
            </Dropdown>
            <Dropdown
              menu={{ items: positionItems }}
              placement="topRight"
              arrow
            >
              <Button>{t('dropdowns.tr')}</Button>
            </Dropdown>
          </Space>
        </S.Card>
        <S.Card title={t('dropdowns.clickable')}>
          <Dropdown menu={{ items: positionItems }} trigger={['click']}>
            <Button onClick={(e) => e.preventDefault()}>
              {t('dropdowns.clickMe')} <DownOutlined />
            </Button>
          </Dropdown>
        </S.Card>
        <S.Card title={t('dropdowns.context')}>
          <Dropdown menu={{ items: positionItems }} trigger={['contextMenu']}>
            <ContextMenuWrapper>{t('dropdowns.rightClick')}</ContextMenuWrapper>
          </Dropdown>
        </S.Card>
      </Col>
    </>
  );
};

export default DropdownsPage;
