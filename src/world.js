import React from 'react';
import flaag from './img/flag.png';



class World extends React.Component {
  render() {
    return (
     <div className='world'>
      <div  className="worldTitel" >
   <h1>  The world's<br/> biggest healthcare platform</h1>
         <p style={{ color: '#747474 '}}>We work from 6 offices all over the world, bringing Docplanner<br/> Group to life in almost 20 countries.</p>
       </div>
            <div className='Bloc-a'>
       <div className="bloc-1"> 
            <img  scr={flaag} />
            <div className="bloc-11">
             <h3  style={{ color: '#00b39b'}}>Leader in<br/> 10 countries</h3>
                      
<p className='poland'> Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina, and Chile</p>         
</div>
 </div>
 <div className="bloc-1" style={{marginLeft: '3%'}}> 
            <img  scr={flaag} />
            <div className="bloc-11">
             <h3  style={{ color: '#00b39b'}}>1 million appointments</h3>
                      <p className='poland'> booked last month</p>         
</div>
 </div>
 </div>
  <div className="Bloc-b">
     <div className="bloc-1"> 
            <img  scr={flaag} />
            <div className="bloc-11">
             <h3  style={{ color: '#00b39b'}}>  30 million unique patients</h3>        
               <p className='poland'> visit us every month</p>         
            </div>                  
    </div>
           
        <div className="bloc-1" style={{marginLeft: '3%'}}> 
            <img  scr={flaag} />
            <div className="bloc-11">
             <h3  style={{ color: '#00b39b'}}> 2 million active doctors </h3>        
               <p className='poland'>trust in our solutions</p>   
            </div>
            </div>

</div>

        </div>                  



    )
  }
}

export default World;