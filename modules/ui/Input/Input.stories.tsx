import Input from './Input';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  render: args => <Input {...args} />,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary:Story = {
  args: {
    placeholder: 'Primary Input'
  }
};

export const Underlined:Story = {
  args: {
    placeholder: 'Underlined Input',
    theme: 'underline'
  }
};

export const WithIcon:Story = {
  args: {
    placeholder: 'Input with Icon',
    iconLeft: 'Password'
  }
};


export const WithCustomPaddings:Story = {
  args: {
    placeholder: 'Input with paddings',
    padLeft: 40,
    padRight: 60
  }
};