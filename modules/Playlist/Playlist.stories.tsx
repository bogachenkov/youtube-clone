import Playlist from './Playlist';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Playlist> = {
  title: 'Playlist',
  component: Playlist,
};

export default meta;

type Story = StoryObj<typeof Playlist>;

export const Default:Story = {
  render: args => <Playlist {...args} />,
  args: {}
};
