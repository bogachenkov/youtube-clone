import HistoryVideoCollection from './HistoryVideoCollection';
import { Meta, StoryObj } from '@storybook/react';
import { MockedHistoryCollection } from 'mocks/historyTabs';

const meta:Meta<typeof HistoryVideoCollection> = {
  title: 'History/VideoCollection',
  component: HistoryVideoCollection,
  tags: ['autodocs'],
  render: (args) => {
    return <HistoryVideoCollection {...args} />;
  },
};

export default meta;

type Story = StoryObj<typeof HistoryVideoCollection>;

export const Default:Story = {
  args: {
    collection: MockedHistoryCollection
  }
};