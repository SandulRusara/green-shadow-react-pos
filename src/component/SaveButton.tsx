import React from "react";

interface SaveButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const SaveButton: React.FC<SaveButtonProps> = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        >
            {children}
        </button>
    );
};

export default SaveButton;
