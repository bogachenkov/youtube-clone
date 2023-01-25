import ControlButton from './ControlButton';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof ControlButton> = {
  title: 'Video/Card/ControlButton',
  component: ControlButton,
};

export default meta;

type Story = StoryObj<typeof ControlButton>;

export const Default:Story = {
  render: args => <ControlButton {...args} />,
  args: {}
};
