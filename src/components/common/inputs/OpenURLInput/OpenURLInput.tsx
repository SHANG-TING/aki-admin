import React, { useMemo } from 'react';

import { Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';

import { FileTextOutlined } from '@ant-design/icons';
import { Button } from '@app/components/common/buttons/Button/Button';
import { websitePattern } from '@app/constants/patterns';

import { InputProps } from '../Input/Input';
import { SuffixInput } from '../SuffixInput/SuffixInput';

interface OpenURLInputProps extends InputProps {
  href?: string;
  target?: string;
}

export const OpenURLInput: React.FC<OpenURLInputProps> = ({
  href,
  target = '_blank',
  ...props
}) => {
  const { t } = useTranslation();

  const isMatch = useMemo(
    () => new RegExp(websitePattern).test(href || ' '),
    [href]
  );

  return (
    <SuffixInput
      suffix={
        <Tooltip title={t('common.openInNewTab')}>
          <Button
            size="small"
            href={href}
            target={target}
            disabled={!isMatch}
            type="text"
            icon={<FileTextOutlined />}
          />
        </Tooltip>
      }
      {...props}
    />
  );
};
