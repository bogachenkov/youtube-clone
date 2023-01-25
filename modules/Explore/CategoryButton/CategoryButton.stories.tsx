import CategoryButton from './CategoryButton';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof CategoryButton> = {
  title: 'Explore/CategoryButton',
  component: CategoryButton,
};

export default meta;

type Story = StoryObj<typeof CategoryButton>;

export const Default:Story = {
  render: args => <CategoryButton {...args} />,
  args: {}
};
