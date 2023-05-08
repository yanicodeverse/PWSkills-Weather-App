import React from 'react'
import { UilSearch, UilMapMarker  } from '@iconscout/react-unicons'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Inputs = ({setQuery, units, setUnits}) => {

  const [cities, setCities] = useState("")

  // UNITS
  const handleUnitChange = (e) => {
    let selectedUnit = e.currentTarget.name
    
    if (units !== selectedUnit) setUnits(selectedUnit)
  }

  // CITIES SEARCH
  const handleSearchClick = () => {
    if (cities !== "") {
      setQuery({ q: cities })
      setCities("")
    }
  }

  // GEOLOCATION 
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info('Fetching Current Location.')
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success('Fetched Successfully')
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({
          lat,lon
        })
      })
    }
  }

  return (
    <div className="flex flex-row justify-center my-6 max-sm:flex-col max-sm:items-center">
        {/* inner div which contain input and search and location icon  */}
        {/* everything inside this will be a flex box */}

          <div className="flex flex-row w-3/4 items-center justify-center space-x-4 max-sm:mb-3 max-sm:w-full" >
            {/* input */}
              <input
                  value={cities}
                  onChange={(e) => setCities(e.currentTarget.value)}
                  type="text"
                  name=""
                  id=""
                  placeholder='search...'
                  className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-lg'
              />

              {/* ICONS  */}
              <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' onClick={ handleSearchClick} />
              <UilMapMarker size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' onClick={handleLocationClick} />
          </div>

          {/* celcius and farenheit button  */}

          <div className='flex flex-row w-1/4 items-center justify-center'>
              <button name='metric' className=' text-xl text-white font-light transition ease-out hover:scale-125' onClick={handleUnitChange}>°C</button>
              <p className='text-xl text-white mx-1 '>|</p>
              <button name='imperial' className=' text-xl text-white font-light transition ease-out hover:scale-125' onClick={handleUnitChange}>°F</button>
          </div>
          
    </div>
  )
}

export default Inputs
