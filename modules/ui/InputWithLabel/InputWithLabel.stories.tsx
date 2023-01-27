import InputWithLabel from './InputWithLabel';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof InputWithLabel> = {
  title: 'UI/InputWithLabel',
  component: InputWithLabel,
  tags: ['autodocs'],
  render: args => <InputWithLabel {...args} />,
};

export default meta;

type Story = StoryObj<typeof InputWithLabel>;

export const Primary:Story = {
  args: {
    label: 'Enter your name'
  }
};
