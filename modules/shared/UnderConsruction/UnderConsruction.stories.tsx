import UnderConsruction from './UnderConsruction';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof UnderConsruction> = {
  title: 'UnderConsruction',
  component: UnderConsruction,
};

export default meta;

type Story = StoryObj<typeof UnderConsruction>;

export const Default:Story = {
  render: args => <UnderConsruction {...args} />,
  args: {}
};
