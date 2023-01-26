import Checkbox from './Checkbox';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  render: args => <Checkbox {...args} />,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default:Story = {
  args: {
    label: 'Default',
  }
};

export const Checked:Story = {
  args: {
    label: 'Checked',
    checked: true
  }
}