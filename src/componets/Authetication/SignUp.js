import React, { useState } from "react";

const Signup = () => {
  // State for form inputs and password validation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    reEnterPassword: '',
    rememberMe: false 
  });
  const [passwordValid, setPasswordValid] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    validatePassword(); // Validate password on every input change
  };

  // Validate password
  const validatePassword = () => {
    const { password, reEnterPassword } = formData;
    setPasswordValid(
      password === reEnterPassword &&
      password.length >= 8 &&
      /\d/.test(password) &&
      /[A-Z]/.test(password)
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="reEnterPassword"
            value={formData.reEnterPassword}
            onChange={handleChange}
            placeholder="Re-enter Password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
          {!passwordValid && formData.password && formData.reEnterPassword && (
            <p className="text-red-500 text-sm mt-1">
              Password must be at least 8 characters long and contain at least one uppercase letter and one number.
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Remember Me</span>
          </label>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Continue
          </button>
        </div>
      </form>
      <p className="text-gray-600 text-sm text-center mt-4">
        <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
      </p>
    </div>
  );
};

export default Signup;
