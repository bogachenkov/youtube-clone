import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default:Story = {
  render: args => <Button {...args} />,
  args: {}
};
