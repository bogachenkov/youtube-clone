import EmptyScreen from './EmptyScreen';
import { Meta, StoryObj } from '@storybook/react';
import SignInButton from '../SignInButton';

const meta:Meta<typeof EmptyScreen> = {
  title: 'UI/EmptyScreen',
  component: EmptyScreen,
};

export default meta;

type Story = StoryObj<typeof EmptyScreen>;

export const Default:Story = {
  render: args => <EmptyScreen {...args} />,
  args: {
    emojiCode: '1F627',
    title: 'Empty Screen Title',
    text: 'Empty Screen Text'
  }
};

export const WithChildren:Story = {
  render: args => <EmptyScreen {...args} />,
  args: {
    emojiCode: '1F627',
    title: 'Empty Screen Title',
    text: 'Empty Screen Text',
    children: (<SignInButton fontSize={15} />)
  }
};
