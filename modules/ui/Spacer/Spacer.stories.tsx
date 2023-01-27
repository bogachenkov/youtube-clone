import Spacer from './Spacer';
import { Meta, StoryObj } from '@storybook/react';
import Text from '../Text';
import Row from '../Row';

const meta:Meta<typeof Spacer> = {
  title: 'UI/Spacer',
  component: Spacer,
  tags: ['autodocs'],
  render: args => (
    <>
      <Text size={15}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
      <Spacer {...args} />
      <Text size={15}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
      <Spacer {...args} />
      <Text size={15}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
      <Spacer {...args} />
      <Text size={15}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
    </>
  ),
};

export default meta;

type Story = StoryObj<typeof Spacer>;

export const Vertical:Story = {
  args: {
    vertical: 30
  },
  render: args => (
    <>
      <Text size={15}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
      <Spacer {...args} />
      <Text size={15}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
      <Spacer {...args} />
      <Text size={15}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
      <Spacer {...args} />
      <Text size={15}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
    </>
  ),
};

export const Horizontal:Story = {
  args: {
    horizontal: 30
  },
  render: args => (
    <Row>
      <Text size={15}>Lorem</Text>
      <Spacer {...args} />
      <Text size={15}>ipsum dolor</Text>
      <Spacer {...args} />
      <Text size={15}>sit amet</Text>
      <Spacer {...args} />
      <Text size={15}>consectetur</Text>
    </Row>
  ),
};
