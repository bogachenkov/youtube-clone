import Button from '@ui/Button';
import IconWrapper from '@ui/IconWrapper';
import Row from '@ui/Row';
import React from 'react';
import { StyledTabsScroller } from './styled';

interface ITabsScrollerProps {
  children?: React.ReactNode;
  scrollLeft: VoidFunction;
  scrollRight: VoidFunction;
}

const TabsScroller:React.FC<ITabsScrollerProps> = ({
  scrollLeft,
  scrollRight,
}) => {
  return (
    <StyledTabsScroller>
      <Row justify='flex-end' gap={2}>
        <Button title='Scroll to left' theme='text' onClick={scrollLeft} fontSize={15} >
          <IconWrapper icon='ArrowBackIosNewOutlined' />
        </Button>
        <Button title='Scroll to right' theme='text' onClick={scrollRight} fontSize={15}>
          <IconWrapper icon='ArrowForwardIosOutlined' />
        </Button>
      </Row>
    </StyledTabsScroller>
  );
}

export default TabsScroller;
