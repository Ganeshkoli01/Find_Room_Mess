// src/services/authService.js
const API_URL = '/api/auth';

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to login');
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred');
  }
};

export const signupUser = async (userDetails) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userDetails),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to sign up');
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred');
  }
};

export const logoutUser = () => {
  localStorage.removeItem('authToken');
};
