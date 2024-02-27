import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage() {
  return (
    <div>
      <Helmet>
        <title>Phonebook - 404 page not found!</title>
      </Helmet>
      Sorry! Error! Please use this <Link to="/">link</Link>
    </div>
  );
}
