import CategoryButton from './CategoryButton';
import { Meta, StoryObj } from '@storybook/react';
import { categoriesList } from '../Categories/Categories';

const meta:Meta<typeof CategoryButton> = {
  title: 'Explore/CategoryButton',
  component: CategoryButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CategoryButton>;

export const Default:Story = {
  render: args => <CategoryButton {...args} />,
  args: categoriesList[0]
};
