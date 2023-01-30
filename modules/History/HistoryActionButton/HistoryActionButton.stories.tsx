import HistoryActionButton from './HistoryActionButton';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof HistoryActionButton> = {
  title: 'History/Actions/ActionButton',
  component: HistoryActionButton,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof HistoryActionButton>;

export const Default:Story = {
  render: args => <HistoryActionButton {...args} />,
  args: {
    icon: 'DeleteOutlined',
    text: 'Clear All Watch History'
  }
};
