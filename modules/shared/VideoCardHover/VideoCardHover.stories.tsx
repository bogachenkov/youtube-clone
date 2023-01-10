import VideoCardHover from './VideoCardHover';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof VideoCardHover> = {
  title: 'VideoCardHover',
  component: VideoCardHover,
};

export default meta;

type Story = StoryObj<typeof VideoCardHover>;

export const Default:Story = {
  render: args => <VideoCardHover {...args} />,
  args: {}
};
