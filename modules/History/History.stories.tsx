import History from './History';
import { Meta, StoryObj } from '@storybook/react';
import { MockedHistoryCollection } from 'mocks/history';

const meta:Meta<typeof History> = {
  title: 'History',
  component: History,
  tags: ['autodocs'],
  render: args => <History {...args} />,
};

export default meta;

type Story = StoryObj<typeof History>;

export const Empty:Story = {
  args: {
    mockedHistoryCollection: []
  }
};

export const WithHistory:Story = {
  args: {
    mockedHistoryCollection: MockedHistoryCollection
  }
}
