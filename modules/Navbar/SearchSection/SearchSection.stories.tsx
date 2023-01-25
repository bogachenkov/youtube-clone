import SearchSection from './SearchSection';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof SearchSection> = {
  title: 'Navbar/SearchSection',
  component: SearchSection,
};

export default meta;

type Story = StoryObj<typeof SearchSection>;

export const Default:Story = {
  render: args => <SearchSection {...args} />,
  args: {}
};
