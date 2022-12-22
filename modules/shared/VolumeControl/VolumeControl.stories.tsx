import VolumeControl from './VolumeControl';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof VolumeControl> = {
  title: 'VolumeControl',
  component: VolumeControl,
};

export default meta;

type Story = StoryObj<typeof VolumeControl>;

export const Default:Story = {
  render: args => <VolumeControl {...args} />,
  args: {}
};
