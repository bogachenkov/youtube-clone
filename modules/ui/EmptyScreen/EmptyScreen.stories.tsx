import EmptyScreen from './EmptyScreen';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof EmptyScreen> = {
  title: 'UI/EmptyScreen',
  component: EmptyScreen,
};

export default meta;

type Story = StoryObj<typeof EmptyScreen>;

export const Default:Story = {
  render: args => <EmptyScreen {...args} />,
  args: {}
};
