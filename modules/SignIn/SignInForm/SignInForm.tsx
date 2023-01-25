import { useAuthStore } from '@lib/store';
import Button from '@ui/Button';
import Checkbox from '@ui/Checkbox';
import InputWithLabel from '@ui/InputWithLabel';
import Row from '@ui/Row';
import Spacer from '@ui/Spacer';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

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
  }, [user, router]);

  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    signIn();
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel
        label="Email or phone"
        type={'email'}
        value={'johndoe@example.com'}
      />
      <Spacer vertical={39} />
      <InputWithLabel
        label="Enter Your password"
        type={'password'}
        value={'iamjohndoe'}
      />
      <Spacer vertical={13} />
      <Row justify="space-between">
        <Checkbox
          label='Remember me'
        />
        <Button title='Not Implemented' theme='text'>
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
