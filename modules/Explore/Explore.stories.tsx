import Explore from './Explore';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Explore> = {
  title: 'Explore',
  component: Explore,
};

export default meta;

type Story = StoryObj<typeof Explore>;

export const Default:Story = {
  render: args => <Explore {...args} />,
  args: {}
};
