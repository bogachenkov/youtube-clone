import { Meta, StoryObj } from '@storybook/react';
import { Default as SidebarLink } from './SidebarLink/SidebarLink.stories';

import Sidebar from './Sidebar';

const meta:Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'Sidebar',

};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default:Story = {
  render: args => <Sidebar {...args} />,
  play: async ({ canvasElement }) => {
    // @ts-ignore
    await SidebarLink.play!({ canvasElement });
  }
};