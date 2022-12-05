import Logo from './Logo';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default:Story = {
  render: args => <Logo {...args} />,
  args: {}
};
