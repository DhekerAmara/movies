import React from "react";
import  Card  from 'react-bootstrap/Card';
import  Rate  from './rate';
import 'antd/dist/antd.css'
export default function Cards(props) {
  return (
    <div >
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.movie.image} alt="" /> 
  <Card.Body>
    <Card.Title>{props.movie.name}</Card.Title>
    <Card.Text>
    {props.movie.description}
    </Card.Text>
    <Rate rating={props.movie.rating} /> 
  </Card.Body>

  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

    </div>
  );
}
