import HistoryActions from './HistoryActions';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof HistoryActions> = {
  title: 'History/Actions',
  component: HistoryActions,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof HistoryActions>;

export const Default:Story = {
  render: args => <HistoryActions {...args} />,
  args: {}
};
