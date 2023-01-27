import RadioInput from './RadioInput';
import { Meta, StoryObj } from '@storybook/react';
import Spacer from '../Spacer';

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
