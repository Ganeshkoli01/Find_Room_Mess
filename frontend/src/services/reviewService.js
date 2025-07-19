// src/services/reviewService.js
const API_URL = '/api/reviews';

export const getReviewsForRoom = async (roomId) => {
  try {
    const response = await fetch(`${API_URL}/room/${roomId}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to fetch reviews');
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred');
  }
};

export const createReview = async (reviewData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to create review');
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred');
  }
};
