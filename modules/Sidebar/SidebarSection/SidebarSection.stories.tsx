import SidebarSection from './SidebarSection';
import { Meta, StoryObj } from '@storybook/react';
import { MORE_FROM_YOUTUBE_SECTION } from '@const/navigation';

const meta:Meta<typeof SidebarSection> = {
  title: 'Sidebar/Section',
  component: SidebarSection,
};

export default meta;

type Story = StoryObj<typeof SidebarSection>;

export const Default:Story = {
  render: args => <SidebarSection {...args} />,
  args: {
    name: MORE_FROM_YOUTUBE_SECTION.name,
    links: MORE_FROM_YOUTUBE_SECTION.links
  }
};
