import VideoControls from './VideoControls';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof VideoControls> = {
  title: 'VideoControls',
  component: VideoControls,
};

export default meta;

type Story = StoryObj<typeof VideoControls>;

export const Default:Story = {
  render: args => <VideoControls {...args} />,
  args: {}
};
