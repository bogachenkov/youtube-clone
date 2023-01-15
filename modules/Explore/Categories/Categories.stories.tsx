import Categories from './Categories';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Categories> = {
  title: 'Categories',
  component: Categories,
};

export default meta;

type Story = StoryObj<typeof Categories>;

export const Default:Story = {
  render: args => <Categories {...args} />,
  args: {}
};
