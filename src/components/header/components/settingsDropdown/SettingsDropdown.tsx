import React, { useState } from 'react';

import { SettingOutlined } from '@ant-design/icons';
import { Button } from '@app/components/common/buttons/Button/Button';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { HeaderActionWrapper } from '@app/components/header/Header.styles';

import { SettingsOverlay } from './settingsOverlay/SettingsOverlay/SettingsOverlay';

export const SettingsDropdown: React.FC = () => {
  const [isOpened, setOpened] = useState(false);
  return (
    <Dropdown
      dropdownRender={() => <SettingsOverlay />}
      getPopupContainer={() => document.body}
      trigger={['click']}
      onOpenChange={setOpened}
    >
      <HeaderActionWrapper>
        <Button type={isOpened ? 'ghost' : 'text'} icon={<SettingOutlined />} />
      </HeaderActionWrapper>
    </Dropdown>
  );
};
