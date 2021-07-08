import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

import Nav from '../components/Nav.jsx';
import About from './About.jsx';
import CityDetails from '../components/CityDetails.jsx';
import Home from './Home.jsx'

import './App.css';

const apiKey = process.env.REACT_APP_API_KEY

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(name) {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`)
      .then(city => city.json())
      .then((city) => {
        if(city.main !== undefined){

          const searchedCity = {
            min: Math.round(city.main.temp_min),
            max: Math.round(city.main.temp_max),
            img: city.weather[0].icon,
            id: city.id,
            wind: city.wind.speed,
            temp: city.main.temp,
            name: city.name,
            weather: city.weather[0].main,
            clouds: city.clouds.all,
            latitud: city.coord.lat,
            longitud: city.coord.lon
          };
          
          if (!cities.some(e => e.name === searchedCity.name)) {
            setCities(oldCities => [...oldCities, searchedCity]);
          } else setCities(cities)
        } else {
          alert("City not found");
        }
      });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onFilter(cityId) {
    let city = cities.filter(c => c.id === parseInt(cityId));
    if(city.length > 0) {
        return city[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App">
      <Route path='/' component={Nav}/>
      <Switch>
        <Route exact path='/' render={
          () => <Home
            cities={cities}
            onClose={onClose}
            onSearch={onSearch}
          />}
        />
        <Route exact path='/about' component={About}/>
        <Route exact path='/city/:cityId' render={({match}) => 
          <CityDetails city={onFilter(match.params.cityId)} />} />
      </Switch>
      
    </div>
  );
}

export default App;
