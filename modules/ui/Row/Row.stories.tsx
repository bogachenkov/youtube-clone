import Row from './Row';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Row> = {
  title: 'UI/Row',
  component: Row,
};

export default meta;

type Story = StoryObj<typeof Row>;

export const Default:Story = {
  render: args => <Row {...args} />,
  args: {}
};
