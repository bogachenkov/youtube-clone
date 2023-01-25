import CommentAddForm from './CommentAddForm';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof CommentAddForm> = {
  title: 'Comments/Comment/CommentAddForm',
  component: CommentAddForm,
};

export default meta;

type Story = StoryObj<typeof CommentAddForm>;

export const Default:Story = {
  render: args => <CommentAddForm {...args} />,
  args: {}
};
