import { Steps as AntdSteps } from 'antd';
import styled from 'styled-components';

import { Button } from '@app/components/common/buttons/Button/Button';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { Select as CommonSelect } from '@app/components/common/selects/Select/Select';
import { FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';

export const PhoneItem = styled((props) => <BaseForm.Item {...props} />)`
  .ant-input-group-addon {
    padding: 0;
  }

  .ant-input-group-addon > div {
    width: 100% !important;
  }
`;

export const Steps = styled(AntdSteps)`
  .ant-steps-item-process
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: var(--primary-color);
  }

  .ant-steps-item-wait
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: var(--subtext-color);
  }

  .ant-steps-item-wait .ant-steps-item-icon {
    border-color: var(--subtext-color);
    & > .ant-steps-icon {
      color: var(--subtext-color);
    }
  }

  & .ant-steps-item {
    &-description,
    &-subtitle {
      color: var(--subtext-color) !important;
    }
  }
`;

export const FormContent = styled.div`
  margin: 1.25rem 0.5rem;
`;

export const PrevButton = styled((props) => <Button {...props} />)`
  margin: 0 0.5rem;
`;

export const Select = styled((props) => <CommonSelect {...props} />)`
  width: 5.9375rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 1.25rem 0.5rem;
`;

export const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailsTitle = styled.div`
  color: var(--text-light-color);
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-right: 0.5rem;
`;

export const DetailsValue = styled.div`
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
`;
