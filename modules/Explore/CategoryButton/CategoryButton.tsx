import IconWrapper, { IconName } from '@modules/shared/IconWrapper/IconWrapper';
import Spacer from '@modules/shared/Spacer';
import Text from '@modules/shared/Text';
import React from 'react';
import Ink from 'react-ink';
import { StyledCategoryButton } from './styled';

export interface ICategory {
  label: string;
  icon: IconName;
}

export interface ICategoryButtonProps extends ICategory {
  onClick: VoidFunction;
  isActive: boolean;
}


const CategoryButton:React.FC<ICategoryButtonProps> = ({
  label,
  icon,
  isActive,
  onClick
}) => {
  return (
    <StyledCategoryButton
      onClick={onClick}
    >
      <Ink />
      <IconWrapper size={32} icon={icon} />
      <Text weight='regular' size={13} color='inherit'>
        {label}
      </Text>
    </StyledCategoryButton>
  );
}

export default CategoryButton;
