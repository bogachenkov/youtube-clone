import Button from '@modules/shared/Button';
import { IButtonProps } from '@modules/shared/Button/Button';
import IconWrapper from '@modules/shared/IconWrapper';
import { IconName } from '@modules/shared/IconWrapper/IconWrapper';
import Row from '@modules/shared/Row';
import React from 'react';

interface IHistoryActionButtonProps extends IButtonProps {
  icon: IconName;
  text: string;
}

const HistoryActionButton:React.FC<IHistoryActionButtonProps> = ({
  icon,
  text,
  ...buttonProps
}) => {
  return (
    <Button {...buttonProps} theme="text">
      <Row gap={14}>
        <IconWrapper size={23} icon={icon} />
        {text}
      </Row>
    </Button>
  );
}

export default HistoryActionButton;
