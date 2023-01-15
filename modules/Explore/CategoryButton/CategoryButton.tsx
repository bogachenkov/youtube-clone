import IconWrapper, { IconName } from '@modules/shared/IconWrapper/IconWrapper';
import Spacer from '@modules/shared/Spacer';
import Text from '@modules/shared/Text';
import React from 'react';
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
      style={{
        ['--cat-button-color' as string]: isActive ? 'red' : 'var(--color-light)'
      }}
      onClick={onClick}
    >
      <IconWrapper size={37} icon={icon} />
      <Spacer vertical={20} />
      <Text weight='regular' size={16} color='inherit'>
        {label}
      </Text>
    </StyledCategoryButton>
  );
}

export default CategoryButton;
