import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import styled from 'styled-components';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { authSelectors } from '../redux/auth';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <LoginForm onSubmit={this.handleSubmit} autoComplete="off">
        <h2>Log in</h2>
        <Label>
          <Span>
            <MailOutlineIcon />
            Email
          </Span>

          <Input
            placeholder="Enter email"
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
            placeholder="Enter password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </Label>
        <LoginButton type="submit">Log in</LoginButton>
        {this.props.error && <p>Invalid login or password</p>}
      </LoginForm>
    );
  }
}
const mapStateToProps = state => ({
  error: authSelectors.getError(state),
});

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);

export const LoginForm = styled.form`
  text-align: center;
  padding: 40px;
  font-family: 'Itim', cursive;

  margin-right: auto;
  margin-left: auto;
  flex-direction: column;
  width: 350px;
  margin-top: 50px;
  display: flex;
  border: 10px solid rgb(82, 38, 83);
  color: rgb(188, 171, 188);

  background-color: #350d36;
`;
export const Label = styled.label`
  margin-bottom: 18px;
  text-align: left;
  display: flex;
  flex-direction: column;
`;
export const Span = styled.span`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  background-color: transparent;
  border-color: transparent;
  border-bottom: 1px solid rgb(82, 38, 83);
  box-shadow: 36px 40px 40px -32px rgba(34, 60, 80, 0.2);
  outline: none;
  padding: 5px;
  color: white;
  &:focus {
    background-color: #3f0e40;
  }
`;

export const LoginButton = styled.button`
  color: white;
  cursor: pointer;
  background-color: #3f0e40;
  border: 1px solid whitesmoke;
  padding: 7px;
  border-radius: 5px;
  &:hover {
    color: rgb(188, 171, 188);
    background-color: #350d36;
  }
`;
