import { useHistoryTabs } from '@lib/hooks/useHistoryTabs';
import { IVideoPreview } from '@ts-types/Video';
import GridContainer from '@ui/GridContainer';
import Spacer from '@ui/Spacer';
import Tabs from '@ui/Tabs';
import React from 'react';

interface IHistoryVideoCollectionProps {
  collection: IVideoPreview[]
}

const HistoryVideoCollection:React.FC<IHistoryVideoCollectionProps> = ({
  collection
}) => {
  const { tabProps, selectedTab } = useHistoryTabs(collection);

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

export default React.memo(HistoryVideoCollection);
