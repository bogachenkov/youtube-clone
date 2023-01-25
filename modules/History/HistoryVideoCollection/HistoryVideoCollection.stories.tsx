import HistoryVideoCollection from './HistoryVideoCollection';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof HistoryVideoCollection> = {
  title: 'History/VideoCollection',
  component: HistoryVideoCollection,
};

export default meta;

type Story = StoryObj<typeof HistoryVideoCollection>;

export const Default:Story = {
  render: args => <HistoryVideoCollection {...args} />,
  args: {}
};
