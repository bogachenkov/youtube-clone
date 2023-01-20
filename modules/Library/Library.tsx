import { useLibraryTabs } from '@lib/hooks/useLibraryTabs';
import Container from '@modules/shared/Container';
import GridContainer from '@modules/shared/GridContainer';
import Row from '@modules/shared/Row';
import Spacer from '@modules/shared/Spacer';
import Tabs from '@modules/shared/Tabs';
import React from 'react';
import LibraryStats from './LibraryStats';

interface ILibraryProps {
  children?: React.ReactNode;
}

const Library:React.FC<ILibraryProps> = (props) => {
  const {tabProps, selectedTab} = useLibraryTabs();

  return (
    <Container>
      <Row justify='space-between'>
        <Tabs {...tabProps} />
        <LibraryStats />
      </Row>
      <Spacer vertical={27} />
      <div>
        {
          tabProps.tabs.length > 0 && selectedTab.children
        }
      </div>
    </Container>
  );
}

export default Library;
