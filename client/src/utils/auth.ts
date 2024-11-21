import { jwtDecode, JwtPayload } from 'jwt-decode';

const AuthService = {
  getProfile() {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  },

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  },

  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (decoded.exp && Date.now() / 1000 > decoded.exp) {
        return true;
      }
      return false;
    } catch (err) {
      console.error('Error decoding token:', err);
      return true;
    }
  },

  getToken(): string | null {
    return localStorage.getItem('jwt');
  },

  login(idToken: string) {
    localStorage.setItem('jwt', idToken);
    window.location.assign('/');
  },

  logout() {
    localStorage.removeItem('jwt');
    window.location.assign('/login');
  }
};

export default AuthService;
