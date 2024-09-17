import React from 'react';

interface PersonCardProps {
  name: string;
  age: number;
  gender: string;
  last_seen: string;
  description: string;
  image?: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ name, age, gender, last_seen, description, image }) => (
  <div className="bg-white p-4 rounded-lg border-orange-800 shadow">
    <img src={image || "/api/placeholder/100/100"} alt={name} className="w-24 h-24 mr-4 object-cover" />
    <div>
      <div className="font-bold">Name: {name}</div>
      <div>Age: {age}</div>
      <div>Gender: {gender}</div>
      <div>Last Seen Location: {last_seen}</div>
      <div>Description: {description}</div>
    </div>
  </div>
);

export default PersonCard;