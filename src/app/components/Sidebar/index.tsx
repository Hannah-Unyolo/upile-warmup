'use client';
import React from 'react';
import {Home, Upload, Users, HelpCircle, User, Bold } from 'lucide-react';

const SidebarNav = () => {

  const SidebarItem = ({ icon: Icon, label, isActive }) => (
    <li className={`flex items-center p-2 rounded-lg ${isActive ? 'text-[#D4B337] text-[#662113]' : 'text-white hover:text-[#D4B337] hover:text-[#662113] transition-colors duration-200'}`}>
      <Icon className="mr-2" />
      <span className="font-medium">{label}</span>
    </li>
  );
  return (
  
    <div className="w-64 bg-[#662113] text-white p-4">
        <img src='/media/lostlocatelogo.png' alt='LostLocate Logo' className='w-32 h-auto mx-auto sm:mx-0 mb-8' />
        <nav>
          <ul className="space-y-12 font-extrabold">
            <SidebarItem icon={Home} label="Home" isActive={true} />
            <SidebarItem icon={Upload} label="Update Data" isActive={false} />
            <SidebarItem icon={Users} label="Missing persons" isActive={false} />
            <SidebarItem icon={HelpCircle} label="Unidentified bodies" isActive={false} />
            <SidebarItem icon={User} label="Admin" isActive={false} />
          </ul>
        </nav>
      </div>


  );
};

export default SidebarNav;