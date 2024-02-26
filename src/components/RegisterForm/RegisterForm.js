import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  Button,
  FormGroup,
  Field,
  ErrorMessage,
} from './RegisterForm.styled';

const contactsSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Must not be empty'),
  email: Yup.string()
    .email('Enter valid email address')
    .required('Must not be empty'),
  password: Yup.string()
    .min(7, 'Must be 7 or more')
    .max(15, 'Must be no more than 15')
    .required('Must not be empty'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={contactsSchema}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Form>
        <FormGroup>
          Username
          <Field name="name" />
          <ErrorMessage name="name" component="span" />
        </FormGroup>
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

        <Button type="submit" name="register">
          Register
        </Button>
      </Form>
    </Formik>
  );
};
