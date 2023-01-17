import SortButton from './SortButton';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof SortButton> = {
  title: 'SortButton',
  component: SortButton,
};

export default meta;

type Story = StoryObj<typeof SortButton>;

export const Default:Story = {
  render: args => <SortButton {...args} />,
  args: {}
};
