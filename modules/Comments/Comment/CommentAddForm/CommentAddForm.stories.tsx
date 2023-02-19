import CommentAddForm from './CommentAddForm';
import { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useStore } from '@lib/providers/GlobalStoreProvider';

const meta:Meta<typeof CommentAddForm> = {
  title: 'Comments/AddForm',
  component: CommentAddForm,
  tags: ['autodocs'],
  render: args => <CommentAddForm {...args} />,
};

export default meta;

type Story = StoryObj<typeof CommentAddForm>;

export const Default:Story = {
  decorators: [
    (Story) => {
      const { authStore: { signIn } } = useStore();

      useEffect(() => {
        signIn();
      }, [signIn]);

      return <Story />
    }
  ],
};

export const WithCallback:Story = {
  decorators: Default.decorators,
  args: {
    onSubmit: () => alert('Callback called')
  }
}
