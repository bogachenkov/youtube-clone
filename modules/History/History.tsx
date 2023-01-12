import { useHistoryCollection } from '@lib/hooks/useHistoryCollection';
import Container from '@modules/shared/Container';
import Sticky from '@modules/shared/Sticky';
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
      <Sticky top={66}>
        <Container>
          <HistoryControls search={search} setSearch={setSearch} />
        </Container>
      </Sticky>
    </TwoColumnGrid>
  );
}

export default History;
