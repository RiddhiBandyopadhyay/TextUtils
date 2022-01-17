import React, {useState} from 'react';

const About = (props) => {
    return(
        <>
        <div className="team" style = {{color : props.mode === 'light' ? '#141f1f' : 'white'}}>
            <h2>Our Team</h2>

        </div>
    </>
    );
}

export default About;