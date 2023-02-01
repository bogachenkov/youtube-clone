import MobileNavItem from './MobileNavItem';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof MobileNavItem> = {
  title: 'MobileNav/Item',
  component: MobileNavItem,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof MobileNavItem>;

export const Default:Story = {
  render: args => <MobileNavItem {...args} />,
  args: {
    href: '/playlist',
    icon: 'PlaylistAdd',
    label: 'Playlist'
  }
};

export const Active:Story = {
  render: args => <MobileNavItem {...args} />,
  args: {
    href: '/',
    icon: 'Home',
    label: 'Home'
  }
};
