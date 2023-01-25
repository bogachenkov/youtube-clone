import ExploreCollection from './ExploreCollection';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof ExploreCollection> = {
  title: 'Explore/Collection',
  component: ExploreCollection,
};

export default meta;

type Story = StoryObj<typeof ExploreCollection>;

export const Default:Story = {
  render: args => <ExploreCollection {...args} />,
  args: {}
};
