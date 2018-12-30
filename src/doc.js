import React from "react";
import './doc.css';

import star from './img/sygnet.png'

const Description= ()=> {
    return (
    <div className='description'>
    <div className='titre'>
<img  src={star} />
<h1 className="titel">Making the healthcare experience more human</h1>
  </div>
  <div className='text'>
 <p> appointment in the most easy way. The patient journey should be <br/>
                 enjoyable, and that's why we are always next to them: to help them <br/>
                  find the best possible care. Anytime, anywhere.
                </p>
                <p>
                We also help doctors to better manage their practice and build their <br/>
                    online reputation. With our integrated end-to-end solution, doctors  <br/>
                    are able not only to improve their online presence, but also to  <br/>
                    devote their time to what really matters: their patients.<br/>
                </p>
  </div>
    </div>
    )

}






export default Description;