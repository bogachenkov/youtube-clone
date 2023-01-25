import VoiceSearch from './VoiceSearch';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof VoiceSearch> = {
  title: 'UI/VoiceSearch',
  component: VoiceSearch,
};

export default meta;

type Story = StoryObj<typeof VoiceSearch>;

export const Default:Story = {
  render: args => <VoiceSearch {...args} />,
  args: {}
};
