import React from "react";
import { Card, Button, CardColumns, Row } from "react-bootstrap";

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
              <Card.Title>Kirja</Card.Title>
              <Card.Text>Kirja</Card.Text>
              <Button>Lisää koriin</Button>
            </Card.Body>
          </Card>

          <Card className="m-5">
            <Card.Img
              variant="top"
              src="https://images.all-free-download.com/images/graphiclarge/books_of_this_highdefinition_picture_2_166408.jpg"
            />
            <Card.Body>
              <Card.Title>Kirja</Card.Title>
              <Card.Text>Kirja</Card.Text>
              <Button>Lisää koriin</Button>
            </Card.Body>
          </Card>

          <Card className="m-5">
            <Card.Img
              variant="top"
              src="https://images.all-free-download.com/images/graphiclarge/books_of_this_highdefinition_picture_2_166408.jpg"
            />
            <Card.Body>
              <Card.Title>Kirja</Card.Title>
              <Card.Text>Kirja</Card.Text>
              <Button>Lisää koriin</Button>
            </Card.Body>
          </Card>
        </Row>
      </CardColumns>
    </div>
  );
}

export default Cardit;
