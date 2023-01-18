import PlaylistItem from './PlaylistItem';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof PlaylistItem> = {
  title: 'PlaylistItem',
  component: PlaylistItem,
};

export default meta;

type Story = StoryObj<typeof PlaylistItem>;

export const Default:Story = {
  render: args => <PlaylistItem {...args} />,
  args: {}
};
