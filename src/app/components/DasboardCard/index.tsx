import React from 'react';

interface DashboardCardProps {
  title: string;
  count: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, count }) => (
  <div className="bg-[#662113] text-[#D4B337] p-4 rounded-lg">
    <div className="text-3xl font-bold">{count}</div>
    <div>{title}</div>
  </div>
);

export default DashboardCard;