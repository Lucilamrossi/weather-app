import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/cruz.png';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
        <div id="closeIcon" >
            <button onClick={onClose}><img src={logo} alt="not found"/></button>
        </div>
        <div className="card-body">
          <div className="card-title">
            <Link to={`./city/${id}`}>
              <span>{name}</span>
            </Link>
          </div>
          <div className="body">
            <div className="tenperatures">
                <p id="one">Min</p>
                <p id="two">{min}°</p>
                <p id="three">Max</p>
                <p id="four">{max}°</p>
            </div>
            <div>
              <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="not found" />
            </div>
          </div>
        </div>
      </div>
    );
};
