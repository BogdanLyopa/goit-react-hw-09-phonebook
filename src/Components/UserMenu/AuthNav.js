import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const AuthNav = () => (
  <div>
    <StyledNavLink activeClassName="navLink__active" exact to="/register">
      Registration
    </StyledNavLink>
    <StyledNavLink activeClassName="navLink__active" exact to="/login">
      Log in
    </StyledNavLink>
  </div>
);
export default AuthNav;
export const StyledNavLink = styled(NavLink)`
  position: relative;
  display: inline-block;

  font-family: 'Itim', cursive;
  color: white;
  text-decoration: none;
  padding-bottom: 30px;
  padding-top: 30px;
  padding-right: 10px;
  padding-left: 10px;

  &:hover {
    background-color: #3f0e40;
  }
  &.navLink__active::before {
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 4px;
    background-color: white;
    border-radius: 2px;
  }
`;
