import Library from './Library';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Library> = {
  title: 'Library/Library',
  component: Library,
};

export default meta;

type Story = StoryObj<typeof Library>;

export const Default:Story = {
  render: args => <Library {...args} />,
  args: {}
};
