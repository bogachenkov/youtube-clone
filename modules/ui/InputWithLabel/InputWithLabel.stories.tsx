import InputWithLabel from './InputWithLabel';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta:Meta<typeof InputWithLabel> = {
  title: 'UI/InputWithLabel',
  component: InputWithLabel,
  tags: ['autodocs'],
  render: args => <InputWithLabel {...args} />,
};

export default meta;

type Story = StoryObj<typeof InputWithLabel>;

export const Primary:Story = {
  args: {
    label: 'Enter your name'
  }
};

export const ChangeInput:Story = {
  args: Primary.args,
}

ChangeInput.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const inputElement = await canvas.findByRole('textbox') as HTMLInputElement;
  await userEvent.type(inputElement, 'Hello, world!');

  await expect(inputElement.value).toBe('Hello, world!')
}