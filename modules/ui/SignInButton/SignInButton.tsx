import { useSignIn } from '@lib/hooks/useSignInPush';
import { isNumber } from 'lodash';
import Link from 'next/link';
import React from 'react';
import Button from '../Button';
import { IButtonProps } from '../Button/Button';
import IconWrapper from '../IconWrapper';
import Row from '../Row';

interface ISignInButtonProps extends IButtonProps {
  children?: React.ReactNode;
}

const SignInButton:React.FC<ISignInButtonProps> = (props) => {
  const { path } = useSignIn();

  return (
    <Link href={path}>
      <Button {...props} style={{
        padding: '.4em .9em'
      }}>
        <Row gap={6}>
          <IconWrapper size={isNumber(props.fontSize) ? props.fontSize * 2 : undefined} icon='AccountCircle' />
          SIGN IN
        </Row>
      </Button>
    </Link>
  );
}

export default SignInButton;
