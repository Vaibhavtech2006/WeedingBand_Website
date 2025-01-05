import React, { useState } from 'react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  service: string;
}

const BookNow: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
  });
  const [message, setMessage] = useState<string>('');

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send data to backend API
      const response = await axios.post('http://localhost:5000/api/bookings', formData);
      setMessage(response.data.message); // Show success message
    } catch (error) {
      console.error(error);
      setMessage('Error sending booking request');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Book Your Service</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-gold focus:border-gold sm:text-sm"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-gold focus:border-gold sm:text-sm"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="service">
              Service Type
            </label>
            <select
              id="service"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-gold focus:border-gold sm:text-sm"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="wedding-band">Wedding Band</option>
              <option value="lighting">Lighting Services</option>
              <option value="ghori">Ghori Services</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-gold text-white py-2 px-4 rounded-md hover:bg-gold-dark focus:outline-none"
            >
              Confirm Booking
            </button>
          </div>
        </form>

        {/* Show any message received from backend */}
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default BookNow;
