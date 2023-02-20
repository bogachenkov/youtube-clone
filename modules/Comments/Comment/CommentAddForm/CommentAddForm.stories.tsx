import CommentAddForm from './CommentAddForm';
import { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useStore } from '@lib/providers/GlobalStoreProvider';
import { expect, jest } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

const meta:Meta<typeof CommentAddForm> = {
  title: 'Comments/AddForm',
  component: CommentAddForm,
  tags: ['autodocs'],
  render: args => <CommentAddForm {...args} />,
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

export default meta;

type Story = StoryObj<typeof CommentAddForm>;

export const Default:Story = {};

const onSubmitCallback = jest.fn();

export const AddComment:Story = {
  args: {
    onSubmit: onSubmitCallback
  }
}

AddComment.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Typing comment
  const inputElement = await canvas.findByRole('textbox') as HTMLInputElement;
  await userEvent.type(inputElement, 'Hello, world!');

  await expect(inputElement.textContent).toBe('Hello, world!')

  // Sending comment
  const submitButton = await canvas.findByRole('button');
  await userEvent.click(submitButton);

  await expect(onSubmitCallback).toHaveBeenCalled();
  await expect(inputElement.textContent).toBe('');
}