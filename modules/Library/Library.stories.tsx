import Library from './Library';
import { Meta, StoryObj } from '@storybook/react';
import { useMockedLibraryTabs } from 'mocks/libraryTabs';

const meta:Meta<typeof Library> = {
  title: 'Library/Library',
  component: Library,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Library>;

export const Default:Story = {
  decorators: [
    (Story) => {
      const tabs = useMockedLibraryTabs();
      return <Story mockedTabs={tabs} />
    }
  ],
  render: (_, context) => <Library mockedTabs={context.mockedTabs} />
};
