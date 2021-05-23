import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { LoginButton, LoginForm, Label, Span, Input } from './LoginView';
import { authSelectors } from '../redux/auth';
export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector(authSelectors.getError);

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <h2>Registration</h2>
        <Label>
          <Span>
            <PersonIcon />
            Name{' '}
          </Span>
          <Input type="text" name="name" value={name} onChange={handleChange} />
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </Label>
        {error && <p>Registration error, please try again</p>}
        <LoginButton type="submit">Register</LoginButton>
      </LoginForm>
    </div>
  );
}
