import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';

const CardExample=({item})=>{


 return (
      <Col >
        <Card style={{ width: "22rem" }}>
        <img src={item.src} />

          <CardBody style={{display:'flex',justifyContent:'space-between'}}>
            <CardTitle  style={{  color:'#747474'}}>
            {item.title}
            </CardTitle>
            
            <Button href="#">see opinings</Button>
          </CardBody>
        </Card>
      </Col>
    )
  


}
  
   

export default CardExample;