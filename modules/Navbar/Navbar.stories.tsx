import Navbar from './Navbar';
import { Meta, StoryObj } from '@storybook/react';
import { GlobalStoreProvider, useStore } from '@lib/providers/GlobalStoreProvider';
import { useLayoutEffect } from 'react';

const meta:Meta<typeof Navbar> = {
  title: 'Navbar',
  component: Navbar,
  tags: ['autodocs'],
  render: args => <Navbar {...args} />,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default:Story = {
  args: {},
  decorators: [
    (Story) => {
      const { authStore } = useStore();

      useLayoutEffect(() => {
        authStore.signOut();
      }, [authStore])

      return (
        <Story />
      )
    }
  ]
};

export const Authenticated:Story = {
  decorators: [
    (Story) => {
      const { authStore } = useStore();

      useLayoutEffect(() => {
        authStore.signIn();
      }, [authStore])

      return (
        <Story />
      )
    }
  ]
}