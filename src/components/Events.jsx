import React, { useState } from 'react'
import EventCard from './EventCard'
import YearCard from './YearCard'
import FetchEvents from './Utility/FetchEvents';
// import TimelineBuffer from './TimelineBuffer'

const Events = () => {
    const [showYear,setYear] = useState(2024)
  return (
    <div className='mt-20'>
        {/* <YearCard year={2024}></YearCard>
        <EventCard date={'15'} month={'Aug'} header={'Alumni Meet'} children={[
            'Images/alumniMeet_AUG_15/MainBoard.jpg',
            'Images/alumniMeet_AUG_15/MainBoard.jpg',
            'Images/alumniMeet_AUG_15/MainBoard.jpg',
            'Images/alumniMeet_AUG_15/MainBoard.jpg',
            'Images/alumniMeet_AUG_15/MainBoard.jpg',
        ]}></EventCard>
        <EventCard date={'15'} month={'Aug'} header={'Alumni Meet'} children={[
            'Images/alumniMeet_AUG_15/MainBoard.jpg',
            'Images/alumniMeet_AUG_15/MainBoard.jpg',
            'Images/alumniMeet_AUG_15/MainBoard.jpg',
            'Images/alumniMeet_AUG_15/MainBoard.jpg',
            'Images/alumniMeet_AUG_15/MainBoard.jpg',
        ]}></EventCard> */}
        <FetchEvents></FetchEvents>
    </div>

    
  )
}

export default Events