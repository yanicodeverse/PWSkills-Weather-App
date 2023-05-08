import React from 'react'
import { formatToLocalTime } from '../service/weatherService'

function TimeAndLocation({weather: {dt,timezone,name,country}}) {
  return (
      <div>
          {/* TIME AND DATE BLOCK  */}
        <div className='flex items-center justify-center my-6 max-sm:my-2'>
              <p className='text-white font-extralight text-xl max-sm:text-lg'> 
                {formatToLocalTime(dt, timezone)}
              </p>      
        </div>

            {/* LOCATION */}
        <div className='flex items-center justify-center my-3'>
            <p className='text-white font-medium text-3xl max-sm:text-2xl'>
                  {`${name}, ${country}`}
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation
