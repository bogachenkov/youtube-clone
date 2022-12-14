import Title from './Title';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Title> = {
  title: 'Title',
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default:Story = {
  render: args => <Title {...args} />,
  args: {}
};
