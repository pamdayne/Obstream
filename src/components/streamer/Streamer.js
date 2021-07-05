import React from 'react';
import css from './Streamer.module.css';
import logo from '../../img/pam_light.png';

function Streamer(){
    return <div className={css.streamer}>
        <h3>Daeynne's Stream</h3>
        <div className={css.logo}>
            <img src={logo} alt="Streamer's Logo" />
        </div>
    </div>
}

export default Streamer;