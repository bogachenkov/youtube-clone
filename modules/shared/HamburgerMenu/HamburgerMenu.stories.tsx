import HamburgerMenu from './HamburgerMenu';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof HamburgerMenu> = {
  title: 'HamburgerMenu',
  component: HamburgerMenu,
};

export default meta;

type Story = StoryObj<typeof HamburgerMenu>;

export const Default:Story = {
  render: args => <HamburgerMenu {...args} />,
  args: {}
};
