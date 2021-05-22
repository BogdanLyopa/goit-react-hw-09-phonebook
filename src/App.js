import React, { Component, Suspense, lazy } from 'react';
import AppBar from './Components/UserMenu/AppBar';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './styles.css';
import { Switch, Route } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './Components/UserMenu/PrivateRoute';
import PublicRoute from './Components/UserMenu/PublicRoute';
import styled from 'styled-components';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <Container>
          <AppBar />

          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route exact path="/" component={HomeView} />
              <PublicRoute
                path="/register"
                component={RegisterView}
                restricted
                redirectTo="/contacts"
              />
              <PublicRoute
                path="/login"
                component={LoginView}
                restricted
                redirectTo="/contacts"
              />
              <PrivateRoute
                path="/contacts"
                component={ContactsView}
                redirectTo="/login"
              />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

export const Container = styled.div`
  max-width: 1220px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;
