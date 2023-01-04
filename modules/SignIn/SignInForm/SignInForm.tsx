import { useAuthStore } from '@lib/store';
import Button from '@modules/shared/Button';
import Checkbox from '@modules/shared/Checkbox';
import InputWithLabel from '@modules/shared/InputWithLabel';
import Row from '@modules/shared/Row';
import Spacer from '@modules/shared/Spacer';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import {} from './styled';

interface ISignInFormProps {
  children?: React.ReactNode;
}

const SignInForm:React.FC<ISignInFormProps> = (props) => {
  const { signIn, user } = useAuthStore(store => ({
    signIn: store.signIn,
    user: store.user
  }));
  const router = useRouter();

  useEffect(() => {
    if (user !== null) {
      const referer = router.query.referer?.toString();
      router.push(referer ?? '/');
    }
  }, [user]);

  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    signIn();
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel
        label="Email or phone"
        type={'email'}
      />
      <Spacer vertical={39} />
      <InputWithLabel
        label="Enter Your password"
        type={'password'}
      />
      <Spacer vertical={13} />
      <Row justify="space-between">
        <Checkbox
          label='Remember me'
        />
        <Button theme='text'>
          Forgot password?
        </Button>
      </Row>
      <Spacer vertical={48} />
      <Button
        fontSize={17}
        style={{
          width: '100%'
        }}
      >
        Sign In
      </Button>
    </form>
  );
}

export default SignInForm;
