import VideoCard from './VideoCard';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof VideoCard> = {
  title: 'VideoCard',
  component: VideoCard,
};

export default meta;

type Story = StoryObj<typeof VideoCard>;

export const Default:Story = {
  render: args => <VideoCard {...args} />,
  args: {}
};