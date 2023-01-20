import CommentsSection from './CommentsSection';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof CommentsSection> = {
  title: 'CommentsSection',
  component: CommentsSection,
};

export default meta;

type Story = StoryObj<typeof CommentsSection>;

export const Default:Story = {
  render: args => <CommentsSection {...args} />,
  args: {}
};
