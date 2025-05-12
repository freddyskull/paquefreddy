import React from 'react';

const getBadgeClass = (unity) => {
  const baseClass = 'z-10 rounded-full p-1 px-3 text-[8px] font-bold uppercase mr-2';
  
  switch(unity) {
    case 'und':
      return `${baseClass} bg-blue-500 text-white`;
    case 'pqt':
      return `${baseClass} bg-purple-500 text-white`;
    case 'kg':
      return `${baseClass} bg-green-500 text-white`;
    case 'gr':
      return `${baseClass} bg-yellow-500 text-gray-800`;
    case 'lt':
      return `${baseClass} bg-cyan-500 text-white`;
    default:
      return `${baseClass} bg-gray-500 text-white`;
  }
};

export const UnityBadge = ({ unity }) => {
  if (!unity) return null;
  
  const getLabel = (unit) => {
    const labels = {
      'und': 'UND',
      'pqt': 'PQT',
      'kg': 'KG',
      'gr': 'GR',
      'lt': 'LT'
    };
    return labels[unit] || unit.toUpperCase();
  };

  return (
    <span className={getBadgeClass(unity)}>
      {getLabel(unity)}
    </span>
  );
};
