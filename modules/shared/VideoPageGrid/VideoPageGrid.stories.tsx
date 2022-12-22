import VideoPageGrid from './VideoPageGrid';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof VideoPageGrid> = {
  title: 'VideoPageGrid',
  component: VideoPageGrid,
};

export default meta;

type Story = StoryObj<typeof VideoPageGrid>;

export const Default:Story = {
  render: args => <VideoPageGrid {...args} />,
  args: {}
};
