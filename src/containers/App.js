import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          if (!cities.some(e => e.name === ciudad.name)) {
            setCities(oldCities => [...oldCities, ciudad]);
          } else setCities(cities)
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id == parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  // <Nav /> tiene que aparecer en todas las rutas.
// <Cards /> debe aparecer sólo en la ruta /.
// <About /> debe aparecer sólo la ruta /about.
// <Cuidad /> debe aparecer sólo en la ruta /ciudad/{ciudadId}
// 
  return (
    <div className="App">
      <Route path='/' render={() => <Nav onSearch={onSearch}/>}/>
      <Route exact path='/' render={
        () => <Cards
          cities={cities}
          onClose={onClose}
        />}
      />
      <Route path='/About' component={About}/>
      <Route path='/ciudad/:ciudadId' render={({match}) => 
        <Ciudad city={onFilter(match.params.ciudadId)} />} />
      <div>
        
      </div>
      <hr />
    </div>
  );
}

export default App;
