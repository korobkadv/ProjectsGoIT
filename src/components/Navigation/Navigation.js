import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';
import { Nav } from './Navigation.styled';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      {/* {isLoggedIn && (
        <NavLink className={css.link} to="/tasks">
          Tasks
        </NavLink>
      )} */}
    </Nav>
  );
};
