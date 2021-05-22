import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { LoginButton, LoginForm, Label, Span, Input } from './LoginView';
import { authSelectors } from '../redux/auth';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password, name } = this.state;
    return (
      <div>
        <LoginForm onSubmit={this.handleSubmit} autoComplete="off">
          <h2>Registration</h2>
          <Label>
            <Span>
              <PersonIcon />
              Name{' '}
            </Span>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </Label>
          <Label>
            <Span>
              <MailOutlineIcon />
              Email
            </Span>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </Label>
          <Label>
            <Span>
              <LockOpenIcon />
              Password
            </Span>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </Label>
          {this.props.error && <p>Registration error, please try again</p>}
          <LoginButton type="submit">Register</LoginButton>
        </LoginForm>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  error: authSelectors.getError(state),
});
const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
