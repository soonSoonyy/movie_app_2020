import React from 'react';
import './About.css';


function About(props){
    console.log(props);
    return (
    <div className = "about__container">
        <span>
            "FreeDom is the freedom to say that two plus two make four. If that is grantd, all else follows."
        </span>
        <span>- Georg Orwell, 1984</span>
    </div>
    );
}

export default About;