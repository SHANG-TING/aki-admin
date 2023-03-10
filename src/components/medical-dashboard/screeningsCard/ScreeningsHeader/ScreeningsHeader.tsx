import React from 'react';

import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';

import { MonthSelect } from '@app/components/common/selects/MonthSelect/MonthSelect';
import { StatisticsSelect } from '@app/components/common/selects/StatisticsSelect/StatisticsSelect';

import { CurrentStatisticsState } from '../ScreeningsCard/ScreeningsCard';

interface ScreeningsHeaderProps {
  currentStatistics: CurrentStatisticsState;
  setCurrentStatistics: (
    func: (state: CurrentStatisticsState) => CurrentStatisticsState
  ) => void;
}

export const ScreeningsHeader: React.FC<ScreeningsHeaderProps> = ({
  currentStatistics,
  setCurrentStatistics,
}) => {
  const { t } = useTranslation();

  return (
    <Row gutter={[0, { xs: 15, sm: 15, md: 20 }]} align="middle">
      <Col xs={24} xl={12}>
        {t('medical-dashboard.latestScreenings.title')}
      </Col>

      <Col xs={24} xl={12}>
        <Row
          gutter={[
            { xs: 15, sm: 15, md: 20 },
            { xs: 15, sm: 15, md: 20 },
          ]}
        >
          <Col xs={12}>
            <label>
              <MonthSelect
                value={currentStatistics.month}
                width="100%"
                bordered={false}
                shadow
                placeholder={t('medical-dashboard.latestScreenings.month')}
                onChange={(month) =>
                  setCurrentStatistics(
                    (prev) => ({ ...prev, month } as CurrentStatisticsState)
                  )
                }
              />
            </label>
          </Col>

          <Col xs={12}>
            <label>
              <StatisticsSelect
                value={currentStatistics.statistic}
                width="100%"
                bordered={false}
                shadow
                placeholder={t('medical-dashboard.latestScreenings.statistics')}
                onChange={(statistic) =>
                  setCurrentStatistics(
                    (prev) => ({ ...prev, statistic } as CurrentStatisticsState)
                  )
                }
              />
            </label>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
