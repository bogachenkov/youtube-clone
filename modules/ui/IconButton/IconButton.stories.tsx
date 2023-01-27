import IconButton from './IconButton';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof IconButton> = {
  title: 'UI/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  render: args => <IconButton {...args} />,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default:Story = {
  args: {
    icon: 'Alarm',
    size: 32
  }
};

export const Colored:Story = {
  args: {
    ...Default.args,
    fontColor: 'orange',
    hoverColor: 'red'
  }
}