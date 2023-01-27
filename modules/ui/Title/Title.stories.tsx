import Title from './Title';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Title> = {
  title: 'UI/Title',
  component: Title,
  tags: ['autodocs'],
  render: args => <Title {...args} />,
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default:Story = {
  args: {
    children: "Duis aute irure dolor in reprehenderit in voluptate"
  }
};


export const WithCustomSize:Story = {
  args: {
    ...Default.args,
    size: 32
  }
};


export const WithCustomLevel:Story = {
  name: 'With Custom Level (for SEO)',
  args: {
    ...Default.args,
    level: 3
  }
};