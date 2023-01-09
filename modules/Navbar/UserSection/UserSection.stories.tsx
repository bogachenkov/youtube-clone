import UserSection from './UserSection';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof UserSection> = {
  title: 'UserSection',
  component: UserSection,
};

export default meta;

type Story = StoryObj<typeof UserSection>;

export const Default:Story = {
  render: args => <UserSection {...args} />,
  args: {}
};
