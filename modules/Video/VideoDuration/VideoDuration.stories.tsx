import VideoDuration from './VideoDuration';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof VideoDuration> = {
  title: 'Video/Duration',
  component: VideoDuration,
};

export default meta;

type Story = StoryObj<typeof VideoDuration>;

export const Default:Story = {
  render: args => <VideoDuration {...args} />,
  args: {}
};
