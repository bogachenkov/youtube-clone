import History from './History';
import { Meta, StoryObj } from '@storybook/react';
import { useTabs } from '@lib/hooks/useTabs';
import { MockedHistoryTabs } from 'mocks/historyTabs';

const meta:Meta<typeof History> = {
  title: 'History',
  component: History,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof History>;

export const Empty:Story = {
  render: args => <History {...args} />,
  args: {}
};

export const WithHistory:Story = {
  decorators: [
    (Story) => {
      const tabs = useTabs({
        tabs: MockedHistoryTabs,
        initialTabId: 'Today'
      })
      return <Story mockedTabs={tabs} />
    }
  ],
  render: (_, context) => <History mockedTabs={context.mockedTabs} />
}
