import SelectHistoryType from './SelectHistoryType';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof SelectHistoryType> = {
  title: 'History/SelectHistoryType',
  component: SelectHistoryType,
};

export default meta;

type Story = StoryObj<typeof SelectHistoryType>;

export const Default:Story = {
  render: args => <SelectHistoryType {...args} />,
  args: {}
};
