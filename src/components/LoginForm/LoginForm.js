import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/operations';
import {
  Form,
  Button,
  FormGroup,
  Field,
  ErrorMessage,
} from './LoginForm.styled';

const contactsSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter valid email address')
    .required('Must not be empty'),
  password: Yup.string().required('Must not be empty'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={contactsSchema}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <Form>
        <FormGroup>
          Email
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="span" />
        </FormGroup>
        <FormGroup>
          Password
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="span" />
        </FormGroup>

        <Button type="submit" name="login">
          Log In
        </Button>
      </Form>
    </Formik>
  );
};
