import Button from '@ui/Button';
import { IButtonProps } from '@ui/Button/Button';
import IconWrapper from '@ui/IconWrapper';
import { IconName } from '@ui/IconWrapper/IconWrapper';
import Row from '@ui/Row';
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
    <Button
      {...buttonProps}
      fontColor='var(--color-grayLight)'
      theme="text"
      hoverable
    >
      <Row gap={14}>
        <IconWrapper size={23} icon={icon} />
        {text}
      </Row>
    </Button>
  );
}

export default HistoryActionButton;
