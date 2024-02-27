import { Helmet } from 'react-helmet-async';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { LoginWrapper } from './Login.styled';

export default function Login() {
  return (
    <LoginWrapper>
      <Helmet>
        <title>Phonebook - Log In</title>
      </Helmet>
      <LoginForm />
    </LoginWrapper>
  );
}
