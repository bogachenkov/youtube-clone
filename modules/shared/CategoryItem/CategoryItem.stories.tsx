import CategoryItem from './CategoryItem';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof CategoryItem> = {
  title: 'CategoryItem',
  component: CategoryItem,
};

export default meta;

type Story = StoryObj<typeof CategoryItem>;

export const Default:Story = {
  render: args => <CategoryItem {...args} />,
  args: {}
};
