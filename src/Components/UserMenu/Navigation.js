import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { StyledNavLink } from './AuthNav';

const Navigation = ({ isAuthenticated }) => (
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
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
