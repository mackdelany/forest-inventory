import React from "react";
import { Container, Image, Badge, ListGroup } from "react-bootstrap";
import ForestData from "../models/forest";

const ForestInfo: React.FC<ForestData> = ({
  forestName,
  forestType,
  country,
  briefDescription,
  longDescription,
  area,
  carbonStored,
  thirtyDayCarbonChange,
  image,
}: ForestData) => {
  return (
    <Container>
      <br />
      <h2>
        {`${forestName} `}
        <Badge
          pill
          variant={forestType === "Conservation" ? "primary" : "info"}
        >
          {forestType}
        </Badge>
      </h2>
      <ListGroup horizontal className="forest-metrics">
        <ListGroup.Item variant="secondary">{country}</ListGroup.Item>
        <ListGroup.Item variant="secondary">{area} ha</ListGroup.Item>
        <ListGroup.Item variant="secondary">
          {carbonStored} tCO2{"  "}
          <Badge variant="success">
            +{thirtyDayCarbonChange} in last 30 days
          </Badge>
        </ListGroup.Item>
      </ListGroup>
      <p>{briefDescription}</p>
      <Image src={`imgs/${image}`} rounded fluid style={{marginRight: '10px', marginBottom: '10px'}}/>
      <p>{longDescription}</p>
    </Container>
  );
};

export default ForestInfo;
