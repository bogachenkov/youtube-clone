import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';
import { noop } from 'lodash';

const meta:Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  render: args => <Button {...args} />
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary:Story = {
  args: {
    children: 'Primary Button'
  }
};

export const Secondary:Story = {
  args: {
    ...Primary.args,
    theme: 'secondary'
  }
}

export const TextButton:Story = {
  args: {
    ...Primary.args,
    theme: 'text'
  }
}

export const HoverableTextButton:Story = {
  args: {
    ...TextButton.args,
    hoverable: true,
    hoverColor: 'red'
  }
}

export const WithCustomFontSize:Story = {
  args: {
    ...Primary.args,
    fontSize: 18
  }
};


export const ClickButton:Story = {
  args: {
    ...Primary.args,
    onClick: jest.fn()
  },
}

ClickButton.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  const button = await canvas.getByRole('button');
  await userEvent.click(button);
  await expect(args.onClick).toHaveBeenCalled();
}
