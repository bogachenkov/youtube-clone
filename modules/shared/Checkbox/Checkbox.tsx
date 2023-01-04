import React, { InputHTMLAttributes } from 'react';
import { StyledCheckbox, StyledCheckboxInput, StyledCheckboxLabel } from './styled';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

interface ICheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  children?: React.ReactNode;
  label: string;
}

const Checkbox:React.FC<ICheckboxProps> = ({
  label,
  ...inputProps
}) => {
  return (
    <StyledCheckboxLabel>
      <StyledCheckbox>
        <StyledCheckboxInput
          type={'checkbox'}
          {...inputProps}
        />
        <CheckOutlinedIcon fontSize='small' />
      </StyledCheckbox>
      {label}
    </StyledCheckboxLabel>
  );
}

export default Checkbox;
