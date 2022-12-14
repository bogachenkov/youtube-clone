import { Meta, StoryObj } from '@storybook/react';
import SIDEBAR_ITEMS from '../../../const/navigation';

import { userEvent, within } from '@storybook/testing-library';

import SidebarLink from './SidebarLink';

const meta: Meta<typeof SidebarLink> = {
  component: SidebarLink,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};

export default meta;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type Story = StoryObj<typeof SidebarLink>;

export const Default:Story = {
  args: SIDEBAR_ITEMS[0].links[0],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const getLink = (name: string) => canvas.findByRole('link', { name });

    const homeLink = await getLink(SIDEBAR_ITEMS[0].links[0].label);
    await userEvent.hover(homeLink);
    await sleep(2000);
    await userEvent.click(homeLink);
  }
};