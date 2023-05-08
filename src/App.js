import './App.css';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import bgImg from './assets/bgImg.jpg'
import { Inputs, TimeAndLocation, TemperatureAndDetails, getFormattedWeatherData } from './ComponentExports/exports'
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopSection from './components/TopSection';

function App() {

  // STATES
  const [query, setQuery] = useState({})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  // USE_EFFECT
  useEffect(() => {
    const fetchWeather = async () => {

      const message = query.q ? query.q : 'Current location.'
      toast.info('Fetching weather for ' + message)

      await getFormattedWeatherData({ ...query, units })
        .then(data => {

          toast.success(`Successfully fetched data for ${data.name}, ${data.country}`)

          setWeather(data)
        })

    }

    fetchWeather()
  }, [query, units])


  return (
    // MAIN DIV 
    <div className='w-full h-screen bg-slate-950 relative'>

      {/* Image DIV  */}
      <div className={`w-full h-screen  opacity-80 bg-cover bg-gradient-to-tr from-yellow-600 to-blue-800 sm:flex items-center justify-center`}>
        <img src={bgImg} alt="clouds" className=' h-full w-full object-cover absolute mix-blend-overlay' />

        {/* Card */}
        <div className='relative mx-auto max-w-screen-md top-2  py-5 px-32 bg-gradient-to-tl from-red-700 to-blue-600 h-fit shadow-xl shadow-gray-800 rounded-md max-sm:mx-6  max-sm:px-6 ' >
          {/* Components  */}
          {/* top  */}
          <TopSection />
          {/* Input  */}
          <Inputs setQuery={setQuery} setUnits={setUnits} units={units} />

          {weather && (
            <div>

              {/* Time and location component  */}
              <TimeAndLocation weather={weather} />

              {/* Temprature and details component  */}
              <TemperatureAndDetails weather={weather} />
            </div>
          )}
        </div>
      </div>
      {/* TOAST  */}
      <ToastContainer autoClose={500} newestOnTop={true} theme='colored' />
    </div>
  );
}

export default App;
