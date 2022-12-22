import CategoriesList from './CategoriesList';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof CategoriesList> = {
  title: 'CategoriesList',
  component: CategoriesList,
};

export default meta;

type Story = StoryObj<typeof CategoriesList>;

export const Default:Story = {
  render: args => <CategoriesList {...args} />,
  args: {}
};
