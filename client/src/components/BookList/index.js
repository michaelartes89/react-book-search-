import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "../Button"

// Exporting both BookList and BooklListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the book api call
export function BookListItem(props) {
 
  return (
    <li className="list-group-item" style = {{ marginBottom: 15 }}>
      <Container>
        <Row>
          <Col size="xs-2 sm-2">
            <Thumbnail src={props.image|| "https://placehold.it/300x300"} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            <p><strong>By: </strong> {props.authors}</p>
            <p>
                {props.description || "No description available for this book"}
            </p>
            <a rel="noreferrer noopener" target="_blank" href={props.link}>
                Click Here for More Details
              
            </a>
          </Col>

          <Col size ="xs-2-sm-1">
              <Button
                className={"btn btn-primary"}
                click={props.click(props.id)}
                value={props.id}
              >
                  Save
              </Button>
          </Col>
          
        </Row>
      </Container>
    </li>
  );
}