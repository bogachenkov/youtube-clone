import MobileNavItem from './MobileNavItem';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof MobileNavItem> = {
  title: 'MobileNav/Item',
  component: MobileNavItem,
};

export default meta;

type Story = StoryObj<typeof MobileNavItem>;

export const Default:Story = {
  render: args => <MobileNavItem {...args} />,
  args: {}
};
