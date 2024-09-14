import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSidebar = ({isOpen}) => {
  return (
    <div className={`fixed left-0 top-0 ${isOpen? `block`: `hidden`} w-64 h-full bg-gray-800 
    text-white transition-transform duration-500 ease-in-out`}>
      <ul className="mt-16">
        <li className="py-2 px-4 hover:bg-gray-700">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700">
          <Link to="/security">Security</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;