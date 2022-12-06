import Input from './Input';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default:Story = {
  render: args => <Input {...args} />,
  args: {}
};
