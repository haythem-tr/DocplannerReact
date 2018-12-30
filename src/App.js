import React, { Component } from 'react';
import './App.css';
import Description from './doc.js';
import  DropdownPage from './expml.js';
import World from './world.js';
import Paragraph from './paragraph.js';
import NavBar from './NAV.js';
import Cardliste from './cardlist'; 
import Footer from './footer'

const tab=[{
  src:'https://www.docplanner.com/images/warsaw.png',

  title:'warsaw',

},
{
  src:'https://www.docplanner.com/images/barcelona.png',
  
    title:'Barcelona',

},
{
  src:'https://www.docplanner.com/images/istanbul.png',
        title:'Istanbul',
},
{
  src:'https://www.docplanner.com/images/rome.png',
        title:'Rome',

},
{
  src:'https://www.docplanner.com/images/mexico-city.png',
        title:'Mexico City',
},
{
  src:'https://www.docplanner.com/images/curitiba.png',
        title:'Curitiba',
}]
class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar/> 
     <Description />
     < DropdownPage />
     <World/>
     <Paragraph/>   
     <Cardliste  tableau={tab}/>
     <Footer />   
      
      </div>
    );
  }
}

export default App;
