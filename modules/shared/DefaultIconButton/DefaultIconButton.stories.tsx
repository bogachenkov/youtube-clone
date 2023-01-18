import DefaultIconButton from './DefaultIconButton';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof DefaultIconButton> = {
  title: 'DefaultIconButton',
  component: DefaultIconButton,
};

export default meta;

type Story = StoryObj<typeof DefaultIconButton>;

export const Default:Story = {
  render: args => <DefaultIconButton {...args} />,
  args: {}
};
