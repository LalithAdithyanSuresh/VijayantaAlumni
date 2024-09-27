import React from 'react';
import FetchImage from '../Utility/FetchImage.jsx';

function GridImage({Images}) {
    return ( 
        <div className="grid grid-cols-5 grid-rows-6 gap-[5px] p-2 rounded bg-gray-300 max-h-[500px]">
            <div className="col-span-2 row-span-4"><FetchImage Path={Images[0]}/></div>
            <div className="col-span-2 row-span-3 col-start-3"><FetchImage Path={Images[1]}/></div>
            <div className="col-span-2 row-span-2 col-start-1 row-start-5"><FetchImage Path={Images[2]}/></div>
            <div className="row-span-3 col-start-5 row-start-1"><FetchImage Path={Images[3]}/></div>
            <div className="col-span-3 row-span-3 col-start-3 row-start-4"><FetchImage Path={Images[4]}/></div>
        </div>
            
     );
}

export default GridImage;