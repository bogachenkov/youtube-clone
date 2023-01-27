import SignInButton from './SignInButton';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof SignInButton> = {
  title: 'UI/SignInButton',
  component: SignInButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SignInButton>;

export const Default:Story = {
  render: args => <SignInButton {...args} />,
  args: {
    fontSize: 20
  }
};
