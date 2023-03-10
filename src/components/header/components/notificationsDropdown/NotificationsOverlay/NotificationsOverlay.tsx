import React, { useMemo } from 'react';

import { Col, Row, Space } from 'antd';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
  Mention,
  Notification as NotificationType,
} from '@app/api/notifications.api';
import { Notification } from '@app/components/common/Notification/Notification';
import { notificationsSeverities } from '@app/constants/notificationsSeverities';
import { capitalize } from '@app/utils/utils';

import * as S from './NotificationsOverlay.styles';

interface NotificationsOverlayProps {
  notifications: NotificationType[];
  setNotifications: (state: NotificationType[]) => void;
}

export const NotificationsOverlay: React.FC<NotificationsOverlayProps> = ({
  notifications,
  setNotifications,
  ...props
}) => {
  const { t } = useTranslation();

  const noticesList = useMemo(
    () =>
      notifications.map((notification, index) => {
        const type = notificationsSeverities.find(
          (dbSeverity) => dbSeverity.id === notification.id
        )?.name;

        return (
          <Notification
            key={index}
            type={type || 'warning'}
            title={capitalize(type || 'warning')}
            description={t(notification.description)}
            {...(type === 'mention' && {
              mentionIconSrc: (notification as Mention).userIcon,
              title: (notification as Mention).userName,
              description: (
                <Trans i18nKey={(notification as Mention).description}>
                  <S.LinkBtn type="link" href={(notification as Mention).href}>
                    {{ place: t((notification as Mention).place) }}
                  </S.LinkBtn>
                </Trans>
              ),
            })}
          />
        );
      }),
    [notifications, t]
  );

  return (
    <S.NoticesOverlayMenu mode="inline" {...props}>
      <S.MenuRow gutter={[20, 20]}>
        <Col span={24}>
          {notifications.length > 0 ? (
            <Space direction="vertical" size={10} split={<S.SplitDivider />}>
              {noticesList}
            </Space>
          ) : (
            <S.Text>{t('header.notifications.noNotifications')}</S.Text>
          )}
        </Col>
        <Col span={24}>
          <Row gutter={[10, 10]}>
            {notifications.length > 0 && (
              <Col span={24}>
                <S.Btn type="ghost" onClick={() => setNotifications([])}>
                  {t('header.notifications.readAll')}
                </S.Btn>
              </Col>
            )}
            <Col span={24}>
              <S.Btn type="link">
                <Link to="/">{t('header.notifications.viewAll')}</Link>
              </S.Btn>
            </Col>
          </Row>
        </Col>
      </S.MenuRow>
    </S.NoticesOverlayMenu>
  );
};
