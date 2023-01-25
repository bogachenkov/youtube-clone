import Container from './Container';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Container> = {
  title: 'UI/Container',
  component: Container,
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default:Story = {
  render: args => <Container {...args} />,
  args: {}
};
