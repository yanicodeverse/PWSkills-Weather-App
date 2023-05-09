import React from 'react'
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconURLFromCode } from '../service/weatherService';

function TemperatureAndDetails({ weather: {
  details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone
}}) {
  return (
    <div>

      {/* Detail  */}
      <div className='flex items-center justify-center py-3  text-xl text-lime-400'>
        <p>
          {details}
        </p>
      </div>

      {/* Temp. */}
      <div className='flex justify-around items-center py-3 text-white flex-row'>
        <img
          src={iconURLFromCode(icon)}
          alt="images of weather"
          className='w-20'
        />

        <p className='text-4xl'>{`${temp.toFixed()}°` }</p>

        {/* small container main  */}
        <div className='flex flex-col space-y-2 '>
        {/* real feel  */}
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={ 18} className='mr-1' />
            <p>Real feel: </p>
            <span className='font-medium ml-1'>{`${feels_like.toFixed()}°` }</span>
          </div>
          {/* humidity  */}
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear size={ 18} className='mr-1' />
            <p>Humidity: </p>
            <span className='font-medium ml-1'>{`${humidity.toFixed()}%` }</span>
          </div>
          {/* WIND  */}
          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={ 18} className='mr-1' />
            <p>Wind : </p>
            <span className='font-medium ml-1'>{`${speed.toFixed()}km/h` }</span>
          </div>
        </div>

      </div>

      <hr className='mb-3'/>

      {/* RISE,SET,HIGH,LOW  */}
      <div className='flex flex-row items-center justify-around space-x-2 text-white text-sm py-2 max-sm:grid grid-cols-2 max-sm:gap-2 max-sm:px-6'>
        {/* SUNRISE */}
        <UilSun className='max-sm:ml-2' />
        <p className=' font-light max-sm:pl-10'>
          Rise: <span className='font-light ml-1'>{formatToLocalTime(sunrise, timezone, 'hh:mm a') }</span>
        </p>
        <p className=' font-light max-sm:hidden'>|</p>
        
        {/* SUNSET  */}
        <UilSunset />
        <p className=' font-light max-sm:pl-10'>
          Set: <span className='font-light ml-1'>{formatToLocalTime(sunset, timezone, 'hh:mm a') }</span>
        </p>
        <p className=' font-light max-sm:hidden'>|</p>

        {/* HIGH  */}
        <UilArrowUp />
        <p className=' font-light max-sm:pl-10'>
          High: <span className='font-light ml-1'>{`${temp_max.toFixed()}°` }</span>
        </p>
        <p className=' font-light max-sm:hidden'>|</p>

        {/* LOW  */}
        <UilArrowDown />
        <p className=' font-light max-sm:pl-10'>
          Low: <span className='font-light ml-1'>{`${temp_min.toFixed()}°` }</span>
        </p>
        
        
      </div>

    </div>
  )
}

export default TemperatureAndDetails
