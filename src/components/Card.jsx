import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';
import logo from '../img/cruz.png';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
        <div id="closeIcon" >
            <button onClick={onClose}><img src={logo}/></button>
        </div>
        <div className="card-body">
          <Link to={`./ciudad/${id}`}>
            <h5 className="card-title">{name}</h5>
          </Link>
          <div className="body">
            <div className="temperaturas">
                <p id="one">Min</p>
                <p id="two">{min}°</p>
                <p id="three">Max</p>
                <p id="four">{max}°</p>
            </div>
            <div>
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
