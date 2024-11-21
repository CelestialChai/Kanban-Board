import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const token = localStorage.getItem('jwt');
  return token ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;