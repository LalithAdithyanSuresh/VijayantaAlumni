import React from 'react'
import GridImage from './Image/GridImage';
const EventCard = ({children, date, month, header}) => {
    return (
        <div className='m-auto max-w-[1240px] items-center'>
            <div className={`grid sm:grid-cols-[100px_1fr] grid-rows-[70px_1fr] grid-flow-cols mr-4 grid-cols-[60px_1fr]`}>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center text-white text-center font-semibold bg-[#3572EF] rounded-full aspect-square h-8'> {/*top left*/}
                        {date}
                    </div>
                    <div className='font-bold text-[#3572EF]'>
                        {month}
                    </div>
                </div>

                <div className='row-span-2 mt-3'>
                    <div className='font-bold mb-4 text-3xl'>
                        {header}
                    </div>
                    <div className='mb-8'>
                        <GridImage Images={children}></GridImage>
                    </div>                    
                </div>
                
                <div className='flex items-center justify-center h-full w-full'>
                    <div className='h-full w-1 rounded-md bg-[#3572EF]'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard