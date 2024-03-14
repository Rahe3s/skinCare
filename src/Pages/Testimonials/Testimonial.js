import React from 'react'
import {testimony }from '../../Assets/testimonyData'
import './Testimonial.css'
function Testimonial() {
  return (
    <section id='testimony' className='testimony'>
    <div className='testimony-container'>
    <h1>Testimonials</h1>
    </div>
    <div className='testimony-grid'>
        {testimony.map(testimony => (
            <div key={testimony.id} className="testimony-card">
                <div className="profile-pic">
                    <img src={testimony.profilePic} alt={testimony.name} />
                </div>
                <div className="testimony-content">
                    <h2>{testimony.name}</h2>
                    <p>{testimony.testimony}</p>
                </div>
            </div>
        ))}
    
</div>
<div className='testimonial_footer'>

    </div>
</section>
);
};

export default Testimonial