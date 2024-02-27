import { Helmet } from 'react-helmet-async';
import { HomeWrapper, WelkomTitle } from './Home.styled';

export default function Home() {
  return (
    <HomeWrapper>
      <Helmet>
        <title>Phonebook - Welcome page</title>
      </Helmet>
      <WelkomTitle>Welcome!</WelkomTitle>
    </HomeWrapper>
  );
}
