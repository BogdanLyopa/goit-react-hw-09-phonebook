import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styled from 'styled-components';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const UserMenu = ({ name, onLogout }) => (
  <UserDiv>
    <Span>Welcome,{name}!</Span>
    <LogoutButton type="button" onClick={onLogout}>
      <ExitToAppIcon /> Logout
    </LogoutButton>
  </UserDiv>
);
const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

const Span = styled.span`
  margin-right: 15px;
  font-size: 25px;
`;

const LogoutButton = styled.button`
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: silver;
  }
`;

const UserDiv = styled.div`
  display: flex;
  align-items: center;
`;
