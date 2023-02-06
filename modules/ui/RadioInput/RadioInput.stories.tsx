import RadioInput from './RadioInput';
import { Meta, StoryObj } from '@storybook/react';
import Spacer from '../Spacer';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta:Meta<typeof RadioInput> = {
  title: 'UI/RadioInput',
  component: RadioInput,
  tags: ['autodocs'],
  render: args => (
    <>
      <RadioInput label='One' name='abc' />
      <Spacer vertical={10} />
      <RadioInput label='Two' name='abc' />
      <Spacer vertical={10} />
      <RadioInput label='Three' name='abc' />
    </>
  ),
};

export default meta;

type Story = StoryObj<typeof RadioInput>;

export const Default:Story = {
  args: {
    label: 'One'
  }
};

export const SelectOption:Story = {
  args: Default.args
}

SelectOption.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  const radioElement = await canvas.findByLabelText(args.label);
  await expect(radioElement).not.toBeChecked();
  await userEvent.click(radioElement);
  await expect(radioElement).toBeChecked();
}