// src/services/bookingService.js
const API_URL = '/api/booking';

export const getAllBookings = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to fetch bookings');
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred');
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to create booking');
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred');
  }
};

export const cancelBooking = async (bookingId) => {
  try {
    const response = await fetch(`${API_URL}/${bookingId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to cancel booking');
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred');
  }
};
