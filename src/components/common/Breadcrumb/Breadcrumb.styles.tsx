import styled from 'styled-components';
import { Breadcrumb as AntBreadcrumb } from 'antd';
export const { Item } = AntBreadcrumb;

export const BreadcrumbItem = styled((props) => <Item {...props} />)``;
export const Breadcrumb = styled((props) => <AntBreadcrumb {...props} />)``;
