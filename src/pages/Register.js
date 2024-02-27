import { Helmet } from 'react-helmet-async';
import { RegisterWrapper } from './Register.styled';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <RegisterWrapper>
      <Helmet>
        <title>Phonebook - Register</title>
      </Helmet>
      <RegisterForm />
    </RegisterWrapper>
  );
}
