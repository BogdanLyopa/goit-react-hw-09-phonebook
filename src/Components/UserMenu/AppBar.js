import Navigation from './Navigation';
import UserMEnu from './UserMenu';
import AuthNav from './AuthNav';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styled from 'styled-components';

export default function AppBar() {
  const isAuntificated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Header>
      <Navigation />
      {isAuntificated ? <UserMEnu /> : <AuthNav />}
    </Header>
  );
}

const Header = styled.header`
  padding-right: 10px;

  display: flex;
  position: relative;
  justify-content: space-between;
  background-color: #350d36;
  font-family: 'Itim', cursive;
  color: white;
  border-bottom: 1px solid rgb(82, 38, 83);
`;
