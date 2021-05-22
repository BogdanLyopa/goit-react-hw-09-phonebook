const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;
const getError = state => state.auth.error;

export default { getIsAuthenticated, getUsername, getError };
