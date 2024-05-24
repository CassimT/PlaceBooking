import React, { useState, useEffect } from "react";

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

  // Validate password on every input change
  useEffect(() => {
    validatePassword();
  }, [formData.password, formData.reEnterPassword]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
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
    <div className="w-full max-w-md h-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 border border-gray-300 z-10 rounded-md shadow-2xl">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reEnterPassword" className="block text-sm font-bold text-gray-700 mb-1">
            Re-enter Password
          </label>
          <input
            type="password"
            id="reEnterPassword"
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
