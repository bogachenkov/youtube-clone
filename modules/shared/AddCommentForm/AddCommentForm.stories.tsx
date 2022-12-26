import AddCommentForm from './AddCommentForm';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof AddCommentForm> = {
  title: 'AddCommentForm',
  component: AddCommentForm,
};

export default meta;

type Story = StoryObj<typeof AddCommentForm>;

export const Default:Story = {
  render: args => <AddCommentForm {...args} />,
  args: {}
};
