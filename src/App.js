import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import './App.css';
function App() {

  const FirstName='Houssem';
  return (
    <div className="App">
    <Card style={{ width: '18rem', margin: '20px auto', textAlign: 'center' }}>
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Text><Price /></Card.Text>
          <Card.Text><Description /></Card.Text>
        </Card.Body>
      </Card>
      <div>
        <h3>Hello , {FirstName || 'there'}!</h3>
        {FirstName && <img src="https://t4.ftcdn.net/jpg/01/92/48/01/240_F_192480128_PIpC0Yezk3zTxEOQIdOpj8xcq8mJUxOj.jpg" alt="Greeting" />}
      </div>
    </div>
  );
};


export default App;
