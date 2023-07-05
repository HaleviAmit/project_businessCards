import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import EditCardComp from "./EditCard";
import { editCard } from "../../helpers/FetchHelper";

const cardStyle = {
  width: "18rem",
  display: "inline-block",
  padding: 20,
  margin: 10,
  borderRadius: 30,
  backgroundColor: "white",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset",
};
export const buttonStyle = {
  border: "none",
  color: "#fff",
  backgroundImage: "linear-gradient(30deg, #0400ff, #4ce3f7)",
  borderRadius: 20,
  backgroundSize: "100 % auto",
  fontFamily: "inherit",
  fontSize: 17,
  padding: "0.6em 1.5em",
  marginBottom: "1rem",
};

function CardComp({ card, handleClick }) {
  const [openEdit, setOpenEdit] = useState(false);

  return (
    (card && (
      <>
        <Card style={cardStyle}>
          <Card.Img variant="top" style={{ width: 60 }} src={card.bizImage} />
          <Card.Body>
            <Card.Title>{card.bizName}</Card.Title>
            <Card.Text>{card.bizDescription}</Card.Text>
            <Card.Text>{card.bizAddress}</Card.Text>
            <Card.Text>{card.bizPhone}</Card.Text>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button
                style={buttonStyle}
                variant="primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(card._id);
                }}
              >
                Remove this card
              </Button>

              <Button
                style={buttonStyle}
                variant="primary"
                onClick={() => setOpenEdit(!openEdit)}
              >
                Edit this card
              </Button>
            </div>
          </Card.Body>
        </Card>
        {openEdit && (
          <EditCardComp
            clickHandler={(data) => {
              editCard(card._id, data, localStorage.getItem("token"));
              setOpenEdit(false);
            }}
            card={card}
          ></EditCardComp>
        )}
      </>
    )) || <></>
  );
}
export default CardComp;
