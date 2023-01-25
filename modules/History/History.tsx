import { useHistoryTabs } from '@lib/hooks/useHistoryTabs';
import Container from '@ui/Container';
import Sticky from '@ui/Sticky';
import Spacer from '@ui/Spacer';
import Title from '@ui/Title';
import TwoColumnGrid from '@ui/TwoColumnGrid';
import React, { useState } from 'react';
import HistoryControls from './HistoryControls';
import HistoryVideoCollection from './HistoryVideoCollection';
import EmptyScreen from '@ui/EmptyScreen';

interface IHistoryProps {
  children?: React.ReactNode;
}

const History:React.FC<IHistoryProps> = (props) => {
  const [ search, setSearch ] = useState('');
  const tabs = useHistoryTabs(search);

  return (
    <TwoColumnGrid secondCol="350px">
      <Container>
        {
          tabs.tabProps.tabs.length === 0 && (
            <EmptyScreen
              emojiCode='1F627'
              title='Keep Track Of What You Watch'
              text={'Your watch history is empty'}
            />
          )
        }
        {
          tabs.tabProps.tabs.length > 0 && (
            <>
              <Title size={34}>
                Watch History
              </Title>
              <Spacer vertical={19} />
              <HistoryVideoCollection tabs={tabs} />
            </>
          )
        }
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
