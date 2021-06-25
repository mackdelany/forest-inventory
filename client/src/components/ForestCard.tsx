import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ForestData from "../models/forest";

const ForestCard: React.FC<ForestData> = ({
  forestId,
  forestName,
  forestType,
  briefDescription,
  image,
}: ForestData) => {
  const history = useHistory();
  const goToDetailPage = () => {
    history.push(`/${forestId}`);
  };

  return (
    <Card
      className="bg-dark text-white card forest-card"
      onClick={goToDetailPage}
    >
      <Card.Img variant="top" src={`imgs/${image}`} />
      <Card.ImgOverlay>
        <Card.Title> {forestName} </Card.Title>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Subtitle> {forestType} </Card.Subtitle>
        <Card.Text>{briefDescription}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ForestCard;
