import React, { Suspense, lazy, useEffect } from 'react';
import AppBar from './Components/UserMenu/AppBar';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './styles.css';
import { Switch, Route } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';
import PrivateRoute from './Components/UserMenu/PrivateRoute';
import PublicRoute from './Components/UserMenu/PublicRoute';
import styled from 'styled-components';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <AppBar />

        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PublicRoute path="/register" restricted redirectTo="/contacts">
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export const Container = styled.div`
  max-width: 1220px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;
