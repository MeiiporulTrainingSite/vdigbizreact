import React from 'react';
import './team.css';
import teamcard from '../../images/teamcard.png';

import Div from '../../Div/div';


export default function Team() {
    return (
        <div>
            <Div className="team_page">

                </Div>
                

                <div className='container'>
                    <p>Our consultants include medical practitioners, software engineers, designers, data scientists, business managers, entrepreneurs, and research scientists.
                    </p>
                </div>

                <div className='card'>
                    <p> Our experts seamlessly combine strategy, big data, advanced predictive and prescriptive analytics, and implementation processes to change the way healthcare clients think, decide, and act. We support our clients by surfacing data that enables them to make informed decisions for better management and smarter care.
                    </p>
                </div>

                <section className='cardimg'>
                    <img src={teamcard} alt ='team'/>
                </section>
        </div>
    )
}



