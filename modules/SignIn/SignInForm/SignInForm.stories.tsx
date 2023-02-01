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
  decorators: [
    (Story) => (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 358,
        margin: '0 auto'
      }}>
        <Story />
      </div>
    )
  ],
  args: {}
};
