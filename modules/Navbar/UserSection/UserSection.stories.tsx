import UserSection from './UserSection';
import { Meta, StoryObj } from '@storybook/react';
import { StyledControlsSection } from '@modules/Navbar/ControlsSection/styled';
import { DEFAULT_USER_DATA } from '@const/data';

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
  args: {
    mockedUser: null
  }
};

export const SignedIn:Story = {
 args: {
  mockedUser: DEFAULT_USER_DATA
 }
}
