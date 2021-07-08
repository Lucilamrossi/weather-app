import React from 'react'
import './About.css'

export default function About () {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className="container-about">
                <p style={{fontSize: '60px'}} >Weather App</p>
                <p><i>Created by Lucila Rossi as a <a href='https://www.soyhenry.com/'>soyHenry's</a> bootcamp assignment</i></p>
                <p style={{fontSize: '20px'}}><b>Contact me!</b></p>
                <ul style={{width: 'fit-content'}}>
                    <li className="item-about"><a href='https://www.linkedin.com/in/lucila-rossi/'>Linkedin: /lucila-rossi</a></li>
                    <li className="item-about"><a href='https://github.com/Lucilamrossi'>GitHub: /Lucilamrossi</a></li>
                    <li className="item-about"><a href='mailto: lucilamrossi@gmail.com'>Email: lucilamrossi@gmail.com</a></li>
                </ul>
            </div>
        </div>
        
        
    )
}