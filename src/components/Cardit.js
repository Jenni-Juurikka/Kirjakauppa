import React from "react";
import { Card, Button, CardColumns, Row } from "react-bootstrap";
import ostoskori from '../images/shopping-cart.png';
import '../styles/spacing.css'

function Cardit() {
  return (
    <div className="container">
      <CardColumns>
        <Row>
          <Card md={3} className="m-5">
            <Card.Img
              variant="top"
              src="https://images.all-free-download.com/images/graphiclarge/books_of_this_highdefinition_picture_2_166408.jpg"
            />
            <Card.Body>
              <Card.Title className="tuote">Kauhistuttava kirja</Card.Title>
              <Card.Text className="hinta">15€</Card.Text>
              <div className="text-center">
              <Button className="cart">Lisää koriin</Button>
              </div>
            </Card.Body>
          </Card>

          <Card className="m-5">
            <Card.Img
              variant="top"
              src="https://images.all-free-download.com/images/graphiclarge/books_of_this_highdefinition_picture_2_166408.jpg"
            />
            <Card.Body>
            <Card.Title className="tuote">Kirja</Card.Title>
              <Card.Text className="hinta">15€</Card.Text>
              <div className="text-center">
              <Button className="cart">Lisää koriin</Button>
              </div>
            </Card.Body>
          </Card>

          <Card className="m-5">
            <Card.Img
              variant="top"
              src="https://images.all-free-download.com/images/graphiclarge/books_of_this_highdefinition_picture_2_166408.jpg"
            />
            <Card.Body>
            <Card.Title className="tuote">Kirja</Card.Title>
              <Card.Text className="hinta">15€</Card.Text>
              <div className="text-center">
              <Button className="cart">Lisää koriin</Button>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </CardColumns>
    </div>
  );
}

export default Cardit;
