// src/services/messService.js
const API_URL = '/api/mess';

export const getAllMess = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to fetch mess');
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred');
  }
};

export const getMessById = async (messId) => {
  try {
    const response = await fetch(`${API_URL}/${messId}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to fetch mess details');
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred');
  }
};

export const createMess = async (messData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to create mess');
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred');
  }
};
