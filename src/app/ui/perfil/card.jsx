import React from 'react';

const Card = ({ title, content, icon, color }) => {
  return (
    <div className={`bg-white mx-10 p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 border-l-4 border-${color}-500 flex flex-col h-full`}>
      <div className="flex items-center justify-between mb-4">
        {icon && <div className={`text-4xl text-${color}-500 mr-4`}>{icon}</div>}
        <h2 className={`text-xl font-semibold text-${color}-500`}>{title}</h2>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;
