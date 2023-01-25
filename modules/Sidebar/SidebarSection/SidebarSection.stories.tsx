import SidebarSection from './SidebarSection';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof SidebarSection> = {
  title: 'Sidebar/Section',
  component: SidebarSection,
};

export default meta;

type Story = StoryObj<typeof SidebarSection>;

export const Default:Story = {
  render: args => <SidebarSection {...args} />,
  args: {}
};
