import MobileNav from './MobileNav';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof MobileNav> = {
  title: 'MobileNav',
  component: MobileNav,
};

export default meta;

type Story = StoryObj<typeof MobileNav>;

export const Default:Story = {
  render: args => <MobileNav {...args} />,
  args: {}
};
