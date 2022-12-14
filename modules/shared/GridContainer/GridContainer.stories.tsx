import GridContainer from './GridContainer';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof GridContainer> = {
  title: 'GridContainer',
  component: GridContainer,
};

export default meta;

type Story = StoryObj<typeof GridContainer>;

export const Default:Story = {
  render: args => <GridContainer {...args} />,
  args: {}
};
