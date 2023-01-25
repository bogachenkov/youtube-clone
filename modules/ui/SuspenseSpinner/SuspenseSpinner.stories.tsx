import SuspenseSpinner from './SuspenseSpinner';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof SuspenseSpinner> = {
  title: 'UI/SuspenseSpinner',
  component: SuspenseSpinner,
};

export default meta;

type Story = StoryObj<typeof SuspenseSpinner>;

export const Default:Story = {
  render: args => <SuspenseSpinner {...args} />,
  args: {}
};
