import React from 'react';
import Row from '@shared/Row';
import Title from '@shared/Title';

interface IUnderConsructionProps {
  children?: React.ReactNode;
}

const UnderConsruction:React.FC<IUnderConsructionProps> = (props) => {
  return (
    <Row>
      <Title>
        UNDER CONSTRUCTION
      </Title>
    </Row>
  );
}

export default UnderConsruction;
