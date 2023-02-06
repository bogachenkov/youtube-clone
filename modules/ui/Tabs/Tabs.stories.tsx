import Tabs from './Tabs';
import { Meta, StoryObj } from '@storybook/react';
import { CategoryTabs } from '@const/categories';
import { useTabs } from '@hooks/useTabs';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta:Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  render: args => {
    // trunk-ignore(eslint/react-hooks/rules-of-hooks)
    const tabs = useTabs({
      tabs: CategoryTabs,
      initialTabId: CategoryTabs[0].id
    })
    return <Tabs {...tabs.tabProps} />

  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default:Story = {
};

export const SelectTab:Story = {};

SelectTab.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const tab = await canvas.findByRole('button', { name: 'News' });
  await userEvent.click(tab);
  await expect(tab).toHaveStyle('color: #FFFFFF')
}