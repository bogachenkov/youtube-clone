import Subscriptions from './Subscriptions';
import { Meta, StoryObj } from '@storybook/react';
import { MockedSubsCollection } from 'mocks/subscriptions';

const meta:Meta<typeof Subscriptions> = {
  title: 'Subscriptions',
  component: Subscriptions,
  tags: ['autodocs'],
  render: args => <Subscriptions {...args} />,
};

export default meta;

type Story = StoryObj<typeof Subscriptions>;

export const Empty:Story = {
  args: {
    mockedCollection: []
  }
};

export const WithSubscriptions:Story = {
  args: {
    mockedCollection: MockedSubsCollection
  }
}
