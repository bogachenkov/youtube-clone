import Row from './Row';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Row> = {
  title: 'UI/Row',
  component: Row,
  render: args => (
    <Row {...args}>
      <div style={boxStyles}>1</div>
      <div style={boxStyles}>2</div>
      <div style={boxStyles}>3</div>
      <div style={boxStyles}>4</div>
    </Row>
  ),
};

export default meta;

type Story = StoryObj<typeof Row>;

const boxStyles = {
  background: 'var(--color-gray)',
  height: 50,
  width: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export const Primary:Story = {
  args: {}
};

export const WithGap:Story = {
  args: {
    ...Primary.args,
    gap: 20
  }
}

export const WithJustify:Story = {
  args: {
    ...WithGap.args,
    justify: 'space-between'
  }
}

export const WithColumnDirection:Story = {
  args: {
    ...WithGap.args,
    direction: 'column'
  }
}