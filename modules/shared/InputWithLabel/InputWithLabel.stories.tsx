import InputWithLabel from './InputWithLabel';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof InputWithLabel> = {
  title: 'InputWithLabel',
  component: InputWithLabel,
};

export default meta;

type Story = StoryObj<typeof InputWithLabel>;

export const Default:Story = {
  render: args => <InputWithLabel {...args} />,
  args: {}
};
