import React, { useState } from "react";
import { Card } from "react-bootstrap";

const PublicationCard = ({ title, text, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Limit text to a certain number of words (e.g., 50 words)
  const MAX_WORDS = 35;
  const words = text.split(" ");
  const isLongText = words.length > MAX_WORDS;

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="col-md-4 same-height">
      <Card className="box-shadow mb-3">
        <Card.Img className="card-img" variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {isExpanded || !isLongText
              ? text
              : `${words.slice(0, MAX_WORDS).join(" ")}...`}
          </Card.Text>
          {isLongText && (
            <button onClick={toggleText} className="btn btn-link">
              {isExpanded ? "Voir Moins" : "Lire Plus"}
            </button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default PublicationCard;
