import { useLibraryTabs } from '@lib/hooks/useLibraryTabs';
import { useLikesStore, useSubscriptionsStore } from '@lib/store';
import Container from '@modules/shared/Container';
import GridContainer from '@modules/shared/GridContainer';
import Row from '@modules/shared/Row';
import Spacer from '@modules/shared/Spacer';
import Tabs from '@modules/shared/Tabs';
import Text from '@modules/shared/Text';
import React from 'react';

interface ILibraryProps {
  children?: React.ReactNode;
}

const Library:React.FC<ILibraryProps> = (props) => {
  const {tabProps, selectedTab} = useLibraryTabs();
  const subs = useSubscriptionsStore(store => store.subscriptions);
  const likes = useLikesStore(store => store.likedIds);

  return (
    <Container>
      <Row justify='space-between'>
        <Tabs {...tabProps} />
        <Row gap={29}>
          <Text size={13}>
            Subscriptions:
            <span style={{ marginLeft: 8 }}>{subs.length}</span>
          </Text>
          <Text weight='thin' size={16}>|</Text>
          <Text size={13}>
            Uploads:
            <span style={{ marginLeft: 8 }}>0</span>
          </Text>
          <Text weight='thin' size={16}>|</Text>
          <Text size={13}>
            Likes:
            <span style={{ marginLeft: 8 }}>{likes.length}</span>
          </Text>
        </Row>
      </Row>
      <Spacer vertical={27} />
      <GridContainer>
        {
          tabProps.tabs.length > 0 && selectedTab.children
        }
      </GridContainer>
    </Container>
  );
}

export default Library;
