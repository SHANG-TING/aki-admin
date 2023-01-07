import styled from 'styled-components';
import { CheckboxGroup } from '@app/components/common/Checkbox/Checkbox';

export const FilterCheckboxGroup = styled((props) => <CheckboxGroup {...props} />)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
