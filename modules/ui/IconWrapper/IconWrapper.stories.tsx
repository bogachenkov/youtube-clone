import IconWrapper from './IconWrapper';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof IconWrapper> = {
  title: 'UI/IconWrapper',
  component: IconWrapper,
};

export default meta;

type Story = StoryObj<typeof IconWrapper>;

export const Default:Story = {
  render: args => <IconWrapper {...args} />,
  args: {}
};
