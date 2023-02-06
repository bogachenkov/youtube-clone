import Checkbox from './Checkbox';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta:Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  render: args => <Checkbox {...args} />,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default:Story = {
  args: {
    label: 'Default',
  }
};

export const Checked:Story = {
  args: {
    label: 'Checked',
    checked: true
  }
}

export const ToggleCheck:Story = {
  args: Default.args
}

ToggleCheck.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const checkboxElement = await canvas.findByText(Default.args?.label ?? '');
  const checkboxInput = await canvas.findByRole('checkbox');

  await userEvent.click(checkboxElement);

  const checkedIcon = await canvas.findByTestId('checkbox-icon');
  await expect(checkedIcon).toBeVisible();
  await expect(checkboxInput).toBeChecked();
  // delay
  await userEvent.click(checkboxElement);

  await expect(checkedIcon).not.toBeVisible();
  await expect(checkboxInput).not.toBeChecked();
}
