import React from 'react';

interface NavbarItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, isActive, onClick }) => (
  <li
    className={`cursor-pointer pb-2 ${
      isActive
        ? 'text-[#D4B337] border-b-2 border-[#D4B337] font-bold'
        : 'text-black hover:text-[#D4B337] transition-colors duration-200'
    }`}
    onClick={onClick}
  >
    {label}
  </li>
);

export default NavbarItem;