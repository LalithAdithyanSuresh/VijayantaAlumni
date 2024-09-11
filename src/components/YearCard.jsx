import React from 'react';

const YearCard = ({ year }) => {
    return (
        <div className='sticky top-16 m-auto max-w-[1240px] h-16 bg-white flex items-end mb-2 '>
            <div className='ml-8 font-sans font-bold text-4xl text-[#3572EF]'>
                {year}
            </div>
        </div>
    );
}

export default YearCard;
