import IconWrapper from './IconWrapper';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof IconWrapper> = {
  title: 'UI/IconWrapper',
  component: IconWrapper,
  tags: ['autodocs'],
  render: args => <IconWrapper {...args} />,
};

export default meta;

type Story = StoryObj<typeof IconWrapper>;

export const Default:Story = {
  args: {
    icon: 'Alarm',
    size: 32
  }
};

export const Colored:Story = {
  args: {
    ...Default.args,
    color: 'red'
  }
};