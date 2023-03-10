import React, { useEffect, useMemo, useState } from 'react';

import { Col } from 'antd';

import { getStatistics, Statistic } from '@app/api/statistics.api';
import { statistics as configStatistics } from '@app/constants/config/statistics';
import { useResponsive } from '@app/hooks/useResponsive';

import { StatisticsCard } from './statisticsCard/StatisticsCard/StatisticsCard';

export const StatisticsCards: React.FC = () => {
  const [statistics, setStatistics] = useState<Statistic[]>([]);

  const { isTablet } = useResponsive();

  useEffect(() => {
    getStatistics().then((res) => setStatistics(res));
  }, []);

  const statisticsCards = useMemo(
    () =>
      statistics.map((st, index) => {
        const currentStatistic = configStatistics.find((el) => el.id === st.id);

        return currentStatistic ? (
          <Col
            key={st.id}
            id={currentStatistic.name}
            xs={12}
            md={index === statistics.length - 1 ? 0 : 8}
            order={(isTablet && index + 1) || 0}
          >
            <StatisticsCard
              name={currentStatistic.title}
              value={st.value}
              prevValue={st.prevValue}
              color={currentStatistic.color}
              unit={st.unit}
              Icon={currentStatistic.Icon}
            />
          </Col>
        ) : null;
      }),
    [statistics, isTablet]
  );

  return <>{statisticsCards}</>;
};
