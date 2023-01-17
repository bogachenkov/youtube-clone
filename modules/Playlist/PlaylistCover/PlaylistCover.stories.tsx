import PlaylistCover from './PlaylistCover';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof PlaylistCover> = {
  title: 'PlaylistCover',
  component: PlaylistCover,
};

export default meta;

type Story = StoryObj<typeof PlaylistCover>;

export const Default:Story = {
  render: args => <PlaylistCover {...args} />,
  args: {}
};
