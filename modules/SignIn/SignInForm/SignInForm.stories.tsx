import SignInForm from './SignInForm';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof SignInForm> = {
  title: 'SignIn/Form',
  component: SignInForm,
};

export default meta;

type Story = StoryObj<typeof SignInForm>;

export const Default:Story = {
  render: args => <SignInForm {...args} />,
  args: {}
};
