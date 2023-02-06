import IconButton from './IconButton';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';

const meta:Meta<typeof IconButton> = {
  title: 'UI/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  render: args => <IconButton {...args} />,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default:Story = {
  args: {
    icon: 'Alarm',
    size: 32
  }
};

export const Colored:Story = {
  args: {
    ...Default.args,
    fontColor: 'orange',
    hoverColor: 'red'
  }
}

export const ClickButton:Story = {
  args: {
    ...Default.args,
    onClick: jest.fn()
  },
}

ClickButton.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  const button = await canvas.getByRole('button');
  await userEvent.click(button);
  await expect(args.onClick).toHaveBeenCalled();
}