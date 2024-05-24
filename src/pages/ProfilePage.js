import React, { useState, useEffect } from 'react';

function ProfilePage() {
  const [profilePic, setProfilePic] = useState('');

  // This will load the picture from local storage
  useEffect(() => {
    const savedProfilePic = localStorage.getItem('profilePic');
    if (savedProfilePic) {
      setProfilePic(savedProfilePic);
    }
  }, []);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        setProfilePic(result);
        localStorage.setItem('profilePic', result); // Save the profile picture to local storage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-64 flex flex-col items-center">
        <img
          src={profilePic || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input 
            type="file" 
            className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100" 
            onChange={handleProfilePicChange} 
          />
        </label>
      </div>
    </div>
  );
}

export default ProfilePage;
