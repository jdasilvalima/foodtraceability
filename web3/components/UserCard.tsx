import React, { useState, useEffect } from 'react';

interface User {
  name: string;
  location: string;
  role: number;
}

const UserCard: React.FC<{ user: User }> = ({ user }) => {

  const roleMapping = {
    0: 'None',
    1: 'Farmer',
    2: 'Distributor',
    3: 'Retailer',
    4: 'Consumer',
    5: 'Laboratory',
    6: 'Auditor',
  };

  return (
    <div className="max-w-sm border-2 border-slate-400 rounded-xl overflow-hidden">
      <div className="md:flex">
        <div className="flex items-center">
          <img className="max-h-28 w-full object-cover" src="/sheaf-of-rice-emoji.png" alt={`${user.name}'s profile`} />
        </div>
        <div className="p-8">
          <h2 className="mt-2 text-xl font-semibold">{user.name}</h2>
          <div className="uppercase tracking-wide text-sm">{roleMapping[user.role]}</div>
          <p className="mt-2 text-gray-500">{user.location}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;