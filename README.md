
# Project Title


This is a weather app developed using React.js and styled with Tailwind CSS. It displays real-time weather information for entered countries, states, and cities.


## Installation

Install all dependencies 

```bash
  cd weather-app
  npm install 

```
    
## Dependencies and devDependencies

Installing TailwindCss

1.) 
```
  npm install -D tailwindcss
  npx tailwindcss init
```

2.) Configure your template paths.
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3.) Add the Tailwind directives to your CSS.
```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```
----------

Installing React Unicons

```
  npm install --save @iconscout/react-unicons
```

##  Start

Start the application

```
  npm start
```
## Assests and Componets

Assets :- Clouds Backgroung Image.

Components :-

1.) TopSection  \
2.) Input for search  \
3.) Time and Location Component \
4.) Temperature and details Component \
## API

We use openWeather-api for this project.
