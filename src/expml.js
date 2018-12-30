import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import t1 from './img/t1.png';
import t2 from './img/t2.png';

const DropdownPage = () => {

  return (<div>
  <div className='blocs'>
  <div className='blocA'>
  <h1 >For patients</h1>
  

  <p className='pp'><strong>Find a doctor, book a visit and<br/> solve any health-related doubt</strong></p>
  <img className='t1' src={t1} />
     <div className='Butt'>
     <MDBDropdown>
      <MDBDropdownToggle caret color="primary">
        MDBDropdown
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem header>MDBDropdown header</MDBDropdownItem>
        <MDBDropdownItem>Action</MDBDropdownItem>
        <MDBDropdownItem>Another Action</MDBDropdownItem>
        <MDBDropdownItem>Something else here</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    </div>
    

    </div>
<div className='blocB'>
<h1>For doctors</h1>
<p className='ppp'>Save time managing visits and <br/>cut no-shows by half</p>
<img className='t1' src={t2} />
</div>
  </div>
<div className='items'>
<h1 className="global">We are a global<br/>company <br/>with local culture</h1>

     </div>  
    </div>
  );
}

export default DropdownPage;