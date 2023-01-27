import TwoColumnGrid from './TwoColumnGrid';
import { Meta, StoryObj } from '@storybook/react';

const boxStyles = {
  width: '100%',
  height: 120,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 500,
  fontSize: 16,
  background: 'var(--color-gray)'
}

const meta:Meta<typeof TwoColumnGrid> = {
  title: 'UI/TwoColumnGrid',
  component: TwoColumnGrid,
  tags: ['autodocs'],
  render: args => (
    <TwoColumnGrid {...args}>
      <div style={boxStyles}>1</div>
      <div style={boxStyles}>2</div>
    </TwoColumnGrid>
  ),
};

export default meta;

type Story = StoryObj<typeof TwoColumnGrid>;

export const Default:Story = {
  name: 'Equal width columns',
};

export const WithFixedWidth:Story = {
  args: {
    secondCol: '120px'
  }
}

export const WithFractionWidth:Story = {
  args: {
    firstCol: '3fr',
    secondCol: '2fr'
  }
}