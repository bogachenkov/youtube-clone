import TwoColumnGrid from './TwoColumnGrid';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof TwoColumnGrid> = {
  title: 'TwoColumnGrid',
  component: TwoColumnGrid,
};

export default meta;

type Story = StoryObj<typeof TwoColumnGrid>;

export const Default:Story = {
  render: args => <TwoColumnGrid {...args} />,
  args: {}
};
