import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  Button,
  FormGroup,
  Field,
  ErrorMessage,
} from './ContactForm.styled';

const contactsSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Must not be empty'),
  phone: Yup.string()
    .min(9, 'Must be 9 or more')
    .max(15, 'Must be no more than 15')
    .required('Must not be empty'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={contactsSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form>
        <FormGroup>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="span" />
        </FormGroup>
        <FormGroup>
          Number
          <Field name="phone" />
          <ErrorMessage name="phone" component="span" />
        </FormGroup>

        <Button type="submit" name="add">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};
