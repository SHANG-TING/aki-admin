import React, { useCallback } from 'react';

import { Button, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';

import { CopyOutlined } from '@ant-design/icons';
import { notificationController } from '@app/controllers/notificationController';

import { InputProps } from '../Input/Input';
import { SuffixInput } from '../SuffixInput/SuffixInput';

interface ClipboardInputProps extends InputProps {
  valueToCopy?: string;
}

export const ClipboardInput: React.FC<ClipboardInputProps> = ({
  valueToCopy,
  ...props
}) => {
  const { t } = useTranslation();

  const handleCopy = useCallback(
    () =>
      valueToCopy &&
      navigator.clipboard.writeText(valueToCopy).then(() => {
        notificationController.info({ message: t('common.copied') });
      }),
    [valueToCopy, t]
  );

  return (
    <SuffixInput
      suffix={
        <Tooltip title={t('common.copy')}>
          <Button
            size="small"
            disabled={!valueToCopy}
            type="text"
            icon={<CopyOutlined />}
            onClick={handleCopy}
          />
        </Tooltip>
      }
      {...props}
    />
  );
};
