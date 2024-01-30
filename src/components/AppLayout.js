import { Suspense } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout, Header, NavigationMenu } from './AppLayout.styled';
import { NavLink, Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <Layout>
      <Header>
        <nav>
          <NavigationMenu>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </NavigationMenu>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
    </Layout>
  );
};
