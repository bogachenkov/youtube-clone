import MobileNav from './MobileNav';
import { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta:Meta<typeof MobileNav> = {
  title: 'MobileNav',
  component: MobileNav,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone12",
    },
  }
};

export default meta;

type Story = StoryObj<typeof MobileNav>;

export const Default:Story = {
  render: args => <MobileNav {...args} />,
  args: {},
  parameters: {
    docs: { inlineStories: false }
  }
};
