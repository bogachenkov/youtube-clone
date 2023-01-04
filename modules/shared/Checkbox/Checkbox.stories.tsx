import Checkbox from './Checkbox';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default:Story = {
  render: args => <Checkbox {...args} />,
  args: {}
};
