import Spacer from './Spacer';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Spacer> = {
  title: 'Spacer',
  component: Spacer,
};

export default meta;

type Story = StoryObj<typeof Spacer>;

export const Default:Story = {
  render: args => <Spacer {...args} />,
  args: {}
};
