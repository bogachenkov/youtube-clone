import Navbar from './Navbar';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Navbar> = {
  title: 'Navbar',
  component: Navbar,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default:Story = {
  render: args => <Navbar {...args} />,
  args: {}
};
