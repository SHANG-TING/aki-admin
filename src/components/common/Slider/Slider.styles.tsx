import styled from 'styled-components';
import { Slider as AntdSlider } from 'antd';

export const Slider = styled((props) => <AntdSlider {...props} />)`
  & .ant-slider-mark-text:not(.ant-slider-mark-text-active) {
    color: var(--subtext-color);
  }
`;
