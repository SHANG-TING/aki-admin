import React, { useState } from 'react';

import { BellOutlined } from '@ant-design/icons';
import {
  Notification,
  notifications as fetchedNotifications,
} from '@app/api/notifications.api';
import { Badge } from '@app/components/common/Badge/Badge';
import { Button } from '@app/components/common/buttons/Button/Button';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { NotificationsOverlay } from '@app/components/header/components/notificationsDropdown/NotificationsOverlay/NotificationsOverlay';
import { HeaderActionWrapper } from '@app/components/header/Header.styles';

export const NotificationsDropdown: React.FC = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(fetchedNotifications);
  const [isOpened, setOpened] = useState(false);

  return (
    <Dropdown
      dropdownRender={() => (
        <NotificationsOverlay
          notifications={notifications}
          setNotifications={setNotifications}
        />
      )}
      getPopupContainer={() => document.body}
      placement="bottomRight"
      trigger={['click']}
      onOpenChange={setOpened}
    >
      <HeaderActionWrapper>
        <Button
          type={isOpened ? 'ghost' : 'text'}
          icon={
            <Badge dot>
              <BellOutlined />
            </Badge>
          }
        />
      </HeaderActionWrapper>
    </Dropdown>
  );
};
