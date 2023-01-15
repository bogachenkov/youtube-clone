import SignInButton from './SignInButton';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof SignInButton> = {
  title: 'SignInButton',
  component: SignInButton,
};

export default meta;

type Story = StoryObj<typeof SignInButton>;

export const Default:Story = {
  render: args => <SignInButton {...args} />,
  args: {}
};
