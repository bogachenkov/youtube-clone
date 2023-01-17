import PlaylistMeta from './PlaylistMeta';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof PlaylistMeta> = {
  title: 'PlaylistMeta',
  component: PlaylistMeta,
};

export default meta;

type Story = StoryObj<typeof PlaylistMeta>;

export const Default:Story = {
  render: args => <PlaylistMeta {...args} />,
  args: {}
};
