import HistoryActions from './HistoryActions';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof HistoryActions> = {
  title: 'HistoryActions',
  component: HistoryActions,
};

export default meta;

type Story = StoryObj<typeof HistoryActions>;

export const Default:Story = {
  render: args => <HistoryActions {...args} />,
  args: {}
};
