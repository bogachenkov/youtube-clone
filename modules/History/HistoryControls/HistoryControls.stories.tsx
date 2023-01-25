import HistoryControls from './HistoryControls';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof HistoryControls> = {
  title: 'History/Controls',
  component: HistoryControls,
};

export default meta;

type Story = StoryObj<typeof HistoryControls>;

export const Default:Story = {
  render: args => <HistoryControls {...args} />,
  args: {}
};
