import SignIn from './SignIn';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof SignIn> = {
  title: 'SignIn',
  component: SignIn,
};

export default meta;

type Story = StoryObj<typeof SignIn>;

export const Default:Story = {
  render: args => <SignIn {...args} />,
  args: {}
};
