import RadioInput from './RadioInput';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof RadioInput> = {
  title: 'UI/RadioInput',
  component: RadioInput,
};

export default meta;

type Story = StoryObj<typeof RadioInput>;

export const Default:Story = {
  render: args => <RadioInput {...args} />,
  args: {}
};
