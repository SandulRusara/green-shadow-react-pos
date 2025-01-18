import React from "react";

interface UpdateButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const UpdateButton: React.FC<UpdateButtonProps> = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            {children}
        </button>
    );
};

export default UpdateButton;
