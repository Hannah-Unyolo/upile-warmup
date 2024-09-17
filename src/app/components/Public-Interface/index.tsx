'use client';
import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import SidebarNav from '../Sidebar';
import DashboardCard from '../DasboardCard';
import NavbarItem from '../NavbarItem';
import PersonCard from '../PersonCard';
import { useMissingPersons } from '@/app/hooks/useGetMissingPersons';

const Dashboard: React.FC = () => {
  const { missingPersons, isLoading, error } = useMissingPersons();
  const [activeNavItem, setActiveNavItem] = useState<string>('Missing');

  const areaCounts = missingPersons.reduce<Record<string, number>>((acc, person) => {
    acc[person.last_seen] = (acc[person.last_seen] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="flex h-screen bg-white">
      <SidebarNav />
      <div className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 w-[300%] border-red-950 border rounded-full" />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-[#662113]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <Bell className="text-[#D4B337] text-[60%]" />
        </div>
        <div className="mb-8">
          <ul className="flex space-x-60 font-extrabold mb-4">
            {['All', 'Missing', 'Found', 'Departed'].map((item) => (
              <NavbarItem
                key={item}
                label={item}
                isActive={activeNavItem === item}
                onClick={() => setActiveNavItem(item)}
              />
            ))}
          </ul>
          <div className="text-[#D4B337] mb-2">Areas</div>
          <div>Weekly Updates</div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {Object.entries(areaCounts).slice(0, 4).map(([area, count]) => (
            <DashboardCard key={area} title={area} count={count} />
          ))}
        </div>
        <h2 className="text-xl font-bold mb-4">Recent Cases</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {missingPersons.slice(0, 4).map((person) => (
              <PersonCard
                key={person.id}
                name={person.name}
                age={person.age}
                gender={person.gender}
                last_seen={person.last_seen}
                description={person.description}
                image={person.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;