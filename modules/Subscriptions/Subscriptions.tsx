import { useSubsTabs } from '@lib/hooks/useSubsTabs';
import HistoryVideoCollection from '@modules/History/HistoryVideoCollection';
import Container from '@modules/shared/Container';
import EmptyScreen from '@modules/shared/EmptyScreen';
import React from 'react';

interface ISubscriptionsProps {
  children?: React.ReactNode;
}

const Subscriptions:React.FC<ISubscriptionsProps> = (props) => {
  const tabs = useSubsTabs();

  if (tabs.tabProps.tabs.length === 0) return (
    <Container>
      <EmptyScreen
        emojiCode="1F62D"
        title="Don't Miss New Videos"
        text="You have no subscriptions yet"
      />
    </Container>
  );

  return (
    <Container>
      <HistoryVideoCollection tabs={tabs} />
    </Container>
  );
}

export default Subscriptions;
