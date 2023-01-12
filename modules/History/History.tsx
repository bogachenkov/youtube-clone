import { useHistoryCollection } from '@lib/hooks/useHistoryCollection';
import Container from '@modules/shared/Container';
import Spacer from '@modules/shared/Spacer';
import Title from '@modules/shared/Title';
import TwoColumnGrid from '@modules/shared/TwoColumnGrid';
import React, { useState } from 'react';
import HistoryControls from './HistoryControls';
import HistoryVideoCollection from './HistoryVideoCollection';

interface IHistoryProps {
  children?: React.ReactNode;
}

const History:React.FC<IHistoryProps> = (props) => {
  const [ search, setSearch ] = useState('');
  const tabs = useHistoryCollection(search);

  return (
    <TwoColumnGrid secondCol="350px">
      <Container>
        <Title size={34}>
          Watch History
        </Title>
        <Spacer vertical={19} />
        <HistoryVideoCollection tabs={tabs} />
      </Container>
      <Container>
        <HistoryControls search={search} setSearch={setSearch} />
      </Container>
    </TwoColumnGrid>
  );
}

export default History;
