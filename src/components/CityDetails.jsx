import React from 'react'
import './CityDetails.css';

export default function CityDetails({city}) {

    if (city !== null) {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className="container">
                    <div className="title">
                        <p >{city?.name}</p> 
                        <img src={"http://openweathermap.org/img/wn/"+city.img+"@2x.png"} width="80" height="80" alt="" />
                    </div>
                    
                    <div className="info">
                        <div><span className="label">Temperature:</span> {city?.temp} ºC</div>
                        <div><span className="label">Weather:</span> {city?.weather}</div>
                        <div><span className="label">Wind:</span> {city?.wind} km/h</div>
                        <div><span className="label">Clouds:</span> {city?.clouds}</div>
                        <div><span className="label">Latitud: </span>{city?.latitud}º</div>
                        <div><span className="label">Longitud: </span>{city?.longitud}º</div>
                    </div>
                </div>
            </div>
        )
    }
    else return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className="container">
                <p>City details are not available</p>
            </div>
        </div>

    )
}