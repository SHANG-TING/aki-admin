import React from 'react';

import { useTranslation } from 'react-i18next';

import { Button } from '@app/components/common/buttons/Button/Button';
import { DropdownCollapse } from '@app/components/header/Header.styles';
import { useAppSelector } from '@app/hooks/reduxHooks';

import { LanguagePicker } from '../LanguagePicker/LanguagePicker';
import { NightModeSettings } from '../nightModeSettings/NightModeSettings';
import { ThemePicker } from '../ThemePicker/ThemePicker';
import * as S from './SettingsOverlay.styles';

type BeforeInstallPromptEvent = {
  prompt: () => void;
};

export const SettingsOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation();

  const { isPWASupported, event } = useAppSelector((state) => state.pwa);

  return (
    <S.SettingsOverlayMenu mode="inline" selectable={false} {...props}>
      <DropdownCollapse
        bordered={false}
        expandIconPosition="start"
        ghost
        defaultActiveKey="themePicker"
      >
        <DropdownCollapse.Panel
          header={t('header.changeLanguage')}
          key="languagePicker"
        >
          <LanguagePicker />
        </DropdownCollapse.Panel>
        <DropdownCollapse.Panel
          header={t('header.changeTheme')}
          key="themePicker"
        >
          <ThemePicker />
        </DropdownCollapse.Panel>
        <DropdownCollapse.Panel
          header={t('header.nightMode.title')}
          key="nightMode"
        >
          <NightModeSettings />
        </DropdownCollapse.Panel>
      </DropdownCollapse>
      {isPWASupported && (
        <S.PwaInstallWrapper>
          <Button
            block
            type="primary"
            onClick={() =>
              event && (event as BeforeInstallPromptEvent).prompt()
            }
          >
            {t('common.pwa')}
          </Button>
        </S.PwaInstallWrapper>
      )}
    </S.SettingsOverlayMenu>
  );
};
