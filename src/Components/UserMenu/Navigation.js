import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { StyledNavLink } from './AuthNav';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <div>
      <StyledNavLink activeClassName="navLink__active" exact to="/">
        Main
      </StyledNavLink>
      {isAuthenticated && (
        <StyledNavLink activeClassName="navLink__active" to="/contacts">
          Contacts
        </StyledNavLink>
      )}
    </div>
  );
}
