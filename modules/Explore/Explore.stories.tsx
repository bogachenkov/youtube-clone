import Explore from './Explore';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Explore> = {
  title: 'Explore',
  component: Explore,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Explore>;

export const Section:Story = {
  render: args => <Explore {...args} />,
  args: {}
};
