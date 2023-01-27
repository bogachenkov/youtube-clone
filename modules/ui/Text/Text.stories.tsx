import Text from './Text';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
  tags: ['autodocs'],
  render: args => <Text {...args} />,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default:Story = {
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
};

export const WithCustomSize:Story = {
  args: {
    ...Default.args,
    size: 16
  }
}

export const WithCustomColor:Story = {
  args: {
    ...WithCustomSize.args,
    color: 'red'
  }
}

export const WithCustomWeight:Story = {
  args: {
    ...WithCustomSize.args,
    weight: 'extraBold'
  }
}