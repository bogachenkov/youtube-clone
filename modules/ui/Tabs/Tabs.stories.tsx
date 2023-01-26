import Tabs from './Tabs';
import { Meta, StoryObj } from '@storybook/react';
import { CategoryTabs } from '@const/categories';
import { useTabs } from '@hooks/useTabs';

const meta:Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  render: args => {
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
