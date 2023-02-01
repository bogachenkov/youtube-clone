import HomePageVideos from './VideoCollection';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof HomePageVideos> = {
  title: 'Home/VideoCollection',
  component: HomePageVideos,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof HomePageVideos>;

export const Default:Story = {
  render: args => <HomePageVideos {...args} />,
  args: {}
};