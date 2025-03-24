import React from 'react';

const TeamMembers = () => {

    const members = [
        { name: 'John Michael', status: 'online', avatar: 'https://via.placeholder.com/40' },
        { name: 'Alex Smith', status: 'in a meeting', avatar: 'https://via.placeholder.com/40' },
        { name: 'Samantha Ivy', status: 'offline', avatar: 'https://via.placeholder.com/40' },
        { name: 'John Michael', status: 'online', avatar: 'https://via.placeholder.com/40' },
    ];


    const getStatusColor = (status) => {
        switch (status) {
            case 'online':
                return 'bg-green-500';
            case 'in a meeting':
                return 'bg-orange-500';
            case 'offline':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            {/* Header */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Team members</h2>

            {/* Team Members List */}
            <div className="space-y-4">
                {members.map((member, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
                    >
                        {/* Avatar and Name/Status */}
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                {/* Status Indicator */}
                                <span
                                    className={`absolute bottom-0 right-0 w-5 h-5 ${getStatusColor(
                                        member.status
                                    )} rounded-full border-2 border-white`}
                                ></span>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-800">{member.name}</p>
                                <p className="text-xs text-gray-500 capitalize">{member.status}</p>
                            </div>
                        </div>

                        {/* Add Button */}
                        <button className="px-4 py-1 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition">
                            Add
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMembers;