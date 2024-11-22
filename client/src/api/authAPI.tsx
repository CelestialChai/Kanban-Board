import { UserLogin } from "../interfaces/UserLogin";

export const login = async (userInfo: UserLogin): Promise<{ token: string }> => {
  try {
    console.log('Request payload:', userInfo);

    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const error = await response.json();
      console.error('Error from server:', error);
      throw new Error(error.message || 'Failed to login');
    }

    return await response.json();
  } catch (err) {
    console.error('Login API error:', err);
    throw err;
  }
};