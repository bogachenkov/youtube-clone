import History from './History';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof History> = {
  title: 'History',
  component: History,
};

export default meta;

type Story = StoryObj<typeof History>;

export const Default:Story = {
  render: args => <History {...args} />,
  args: {}
};
