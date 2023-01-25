import Blur from './Blur';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Blur> = {
  title: 'UI/Blur',
  component: Blur,
};

export default meta;

type Story = StoryObj<typeof Blur>;

export const Default:Story = {
  render: args => <Blur {...args} />,
  args: {}
};
