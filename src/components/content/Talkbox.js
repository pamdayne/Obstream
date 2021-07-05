import React from 'react';
import css from './Talkbox.module.css';
import './content.css';

function Talkbox(){
    return <div className={css.content}>
        <div className={css.inner}>
            <div className={css.me_is_here}></div>
        </div>
    </div>;
}

export default Talkbox;