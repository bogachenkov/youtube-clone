import HomePageVideos from './HomePageVideos';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof HomePageVideos> = {
  title: 'HomePageVideos',
  component: HomePageVideos,
};

export default meta;

type Story = StoryObj<typeof HomePageVideos>;

export const Default:Story = {
  render: args => <HomePageVideos {...args} />,
  args: {}
};
