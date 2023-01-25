import HistoryActionButton from './HistoryActionButton';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof HistoryActionButton> = {
  title: 'History/Actions/ActionButton',
  component: HistoryActionButton,
};

export default meta;

type Story = StoryObj<typeof HistoryActionButton>;

export const Default:Story = {
  render: args => <HistoryActionButton {...args} />,
  args: {}
};
