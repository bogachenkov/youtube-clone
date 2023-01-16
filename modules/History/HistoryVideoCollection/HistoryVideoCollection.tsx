import { useHistoryTabs } from '@lib/hooks/useHistoryTabs';
import GridContainer from '@modules/shared/GridContainer';
import Spacer from '@modules/shared/Spacer';
import Tabs from '@modules/shared/Tabs';
import React from 'react';

interface IHistoryVideoCollectionProps {
  tabs: ReturnType<typeof useHistoryTabs>
}

const HistoryVideoCollection:React.FC<IHistoryVideoCollectionProps> = ({
  tabs: {
    tabProps,
    selectedTab
  }
}) => {
  return (
    <>
      <Tabs {...tabProps} />
      <Spacer vertical={27} />
      <GridContainer>
        {
          tabProps.tabs.length > 0 && selectedTab.children
        }
      </GridContainer>
    </>
  );
}

export default HistoryVideoCollection;
