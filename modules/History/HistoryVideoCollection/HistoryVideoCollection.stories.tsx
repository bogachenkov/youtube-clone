import HistoryVideoCollection from './HistoryVideoCollection';
import { Meta, StoryObj } from '@storybook/react';
import { noop } from 'lodash';
import { Tab, useTabs } from '@lib/hooks/useTabs';
import VideoCard from '@modules/Video/VideoCard';
import { MockedVideoCollection } from 'mocks/apiResponses';
import { MockedHistoryTabs } from 'mocks/historyTabs';

const meta:Meta<typeof HistoryVideoCollection> = {
  title: 'History/VideoCollection',
  component: HistoryVideoCollection,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof HistoryVideoCollection>;

export const Default:Story = {
  render: (_, context) => {
    return <HistoryVideoCollection tabs={context.tabs} />;
  },
  decorators: [
    (Story) => {
      const historyTabs = useTabs({
        tabs: MockedHistoryTabs,
        initialTabId: 'Today'
      });

      return <Story tabs={historyTabs} />
    }
  ]
};
