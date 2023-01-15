import { useHistoryCollection } from '@lib/hooks/useHistoryCollection';
import Container from '@modules/shared/Container';
import Sticky from '@modules/shared/Sticky';
import Spacer from '@modules/shared/Spacer';
import Title from '@modules/shared/Title';
import TwoColumnGrid from '@modules/shared/TwoColumnGrid';
import React, { useState } from 'react';
import HistoryControls from './HistoryControls';
import HistoryVideoCollection from './HistoryVideoCollection';
import EmptyScreen from '@modules/shared/EmptyScreen';
import { useAuthStore } from '@lib/store';
import SignInButton from '@modules/shared/SignInButton';
import { isNull } from 'lodash';

interface IHistoryProps {
  children?: React.ReactNode;
}

const History:React.FC<IHistoryProps> = (props) => {
  const [ search, setSearch ] = useState('');
  const user = useAuthStore(store => store.user);
  const tabs = useHistoryCollection(search);

  return (
    <TwoColumnGrid secondCol="350px">
      <Container>
        {
          tabs.tabProps.tabs.length === 0 && (
            <EmptyScreen
              emojiCode='1F627'
              title='Keep Track Of What You Watch'
              text={isNull(user) ? 'Watch history isn\'t viewable when signed out' : 'Your watch history is empty'}
            >
              { !user ? <SignInButton fontSize={16} /> : null }
            </EmptyScreen>
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
