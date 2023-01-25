import Text from './Text';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default:Story = {
  render: args => <Text {...args} />,
  args: {}
};
