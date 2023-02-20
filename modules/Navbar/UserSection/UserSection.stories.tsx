import UserSection from './UserSection';
import { Meta, StoryObj } from '@storybook/react';
import { StyledControlsSection } from '@modules/Navbar/ControlsSection/styled';
import { DEFAULT_USER_DATA } from '@const/data';
import { useStore } from '@lib/providers/GlobalStoreProvider';
import { useLayoutEffect } from 'react';

const meta:Meta<typeof UserSection> = {
  title: 'Navbar/UserSection',
  component: UserSection,
  tags: ['autodocs'],
  render: args => <UserSection {...args} />,
  decorators: [
    (Story) => (
      <StyledControlsSection>
        <Story />
      </StyledControlsSection>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof UserSection>;

export const SignedOut:Story = {
  decorators: [
    (Story) => {
      const { authStore } = useStore();

      useLayoutEffect(() => {
        authStore.signOut();
      }, [authStore]);

      return <Story />
    }
  ]
};

export const SignedIn:Story = {
  decorators: [
    (Story) => {
      const { authStore } = useStore();

      useLayoutEffect(() => {
        authStore.signIn();
      }, [authStore]);

      return <Story />
    }
  ]
}
