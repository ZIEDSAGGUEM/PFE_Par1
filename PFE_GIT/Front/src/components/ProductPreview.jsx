import React, { useRef } from "react";
import { Badge, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function ProductPreview({ _id, category, name, pictures }) {
  const divRef = useRef(null);
  const handleClick = () => {
    const divContent = divRef.current.textContent || divRef.current.innerText;

    const utterance = new SpeechSynthesisUtterance(divContent);
    utterance.lang = "fr-FR"; // Code de langue français
    window.speechSynthesis.speak(utterance);
  };
  return (
    <LinkContainer
      to={`/product/${_id}`}
      style={{ cursor: "pointer", width: "13rem", margin: "10px" }}
    >
      <Card
        style={{ width: "20rem", margin: "10px" }}
        ref={divRef}
        onClick={handleClick}
        tabIndex="0"
        aria-label="Cliquez pour entendre le contenu"
      >
        <Card.Img
          variant="top"
          className="product-preview-img"
          src={pictures[0].url}
          style={{ height: "150px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Badge bg="warning" text="dark">
            {category}
          </Badge>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
}

export default ProductPreview;
