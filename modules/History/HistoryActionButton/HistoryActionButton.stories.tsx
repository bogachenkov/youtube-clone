import HistoryActionButton from './HistoryActionButton';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';

const meta:Meta<typeof HistoryActionButton> = {
  title: 'History/Actions/ActionButton',
  component: HistoryActionButton,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof HistoryActionButton>;

const onClick = jest.fn();

export const Default:Story = {
  render: args => <HistoryActionButton {...args} />,
  args: {
    icon: 'DeleteOutlined',
    text: 'Clear All Watch History',
    onClick
  }
};


Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  const button = await canvas.getByRole('button');
  await userEvent.click(button);
  await expect(args.onClick).toHaveBeenCalled();
}
