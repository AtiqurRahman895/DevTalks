import React from 'react';

const Eid_wish_List = () => {
    return (
        <div 
            className="relative bg-no-repeat py-6 bg-cover bg-top   w-full flex items-center justify-center"
            style={{ backgroundImage: `url(/eid_mubarak.jpg)` }}
        >
            <div className="absolute inset-0 bg-black/40"></div>
            <h5 className="relative text-white text-3xl font-semibold z-10 bg-black/50 px-6 py-2  rounded-md">
            Eid Mubarak 2025
            </h5>
        </div>
    );
};

export default Eid_wish_List;