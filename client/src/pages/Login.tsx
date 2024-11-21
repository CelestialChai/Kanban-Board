import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Auth from '../utils/auth';
import { login } from "../api/authAPI";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!loginData.username || !loginData.password) {
      setError("Both fields are required.");
      setIsLoading(false);
      return;
    }

    try {
      const data = await login(loginData);
      Auth.login(data.token);
      navigate('/');
    } catch (err) {
      setError("Invalid username or password.");
      console.error("Failed to login", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>

        {error && <p className="error">{error}</p>} {/* Display error message */}

        <label>Username</label>
        <input
          type="text"
          name="username"
          value={loginData.username || ''}
          onChange={handleChange}
          disabled={isLoading}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={loginData.password || ''}
          onChange={handleChange}
          disabled={isLoading}
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Submit Form"}
        </button>
      </form>
    </div>
  );
};

export default Login;
