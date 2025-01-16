import React from 'react';

interface CardProps {
    title: string;
    value: number;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
            <h5 className="text-lg font-semibold text-gray-700">{title}</h5>
            <p className="text-2xl font-bold text-green-500 mt-4">{value}</p>
        </div>
    );
};

export default Card;
