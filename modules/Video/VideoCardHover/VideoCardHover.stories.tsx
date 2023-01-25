import VideoCardHover from './VideoCardHover';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof VideoCardHover> = {
  title: 'Video/Card/Hover',
  component: VideoCardHover,
};

export default meta;

type Story = StoryObj<typeof VideoCardHover>;

export const Default:Story = {
  render: args => <VideoCardHover {...args} />,
  args: {}
};
