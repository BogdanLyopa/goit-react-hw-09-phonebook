import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import styled from 'styled-components';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { authSelectors } from '../redux/auth';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector(authSelectors.getError);

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <LoginForm onSubmit={handleSubmit} autoComplete="off">
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </Label>
      <LoginButton type="submit">Log in</LoginButton>
      {error && <p>Invalid login or password</p>}
    </LoginForm>
  );
}

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
