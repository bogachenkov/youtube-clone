import Button from '@modules/shared/Button';
import Row from '@modules/shared/Row';
import Spacer from '@modules/shared/Spacer';
import Text from '@modules/shared/Text';
import Title from '@modules/shared/Title';
import React from 'react';
import SignInForm from './SignInForm';
import { StyledSignInContainer, StyledSignWrapper } from './styled';

interface ISignInProps {
  children?: React.ReactNode;
}

const SignIn:React.FC<ISignInProps> = (props) => {
  return (
    <StyledSignInContainer>
      <StyledSignWrapper>
        <Title size={36}>
          ✌️
        </Title>
        <Spacer vertical={6} />
        <Title size={36}>
          Sign In
        </Title>
        <Spacer vertical={6} />
        <Text size={14}>
          to continue to YouTube
        </Text>
        <Spacer vertical={55} />
        <SignInForm />
        <Spacer vertical={17} />
        <Row gap={8}>
          <Text
            size={12}
            color='var(--color-light)'
            style={{
              textAlign: 'left'
            }}
          >
            Not registered yet?
          </Text>
          <Button fontSize={12} fontColor='red' theme='text'>
            Create an Account
          </Button>
        </Row>
      </StyledSignWrapper>
    </StyledSignInContainer>
  );
}

export default SignIn;
