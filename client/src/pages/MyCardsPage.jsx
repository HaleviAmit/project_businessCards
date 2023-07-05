import { insertNewCard } from "../helpers/FetchHelper";
import { Container, Button } from "react-bootstrap";
import CardsComp from "../components/my-cards/CardsComp";
import CreateCardComp from "../components/my-cards/CreateCardComp";
import { toast } from "react-toastify";
import { useState } from "react";
import { buttonStyle } from "../components/my-cards/CardComp";

function MyCardsPage() {
  const [isAddMode, setAddMode] = useState(false);

  function insertCard(data) {
    insertNewCard(data, localStorage.getItem("token"), () => {
      toast.success("Card created successfully");
      setAddMode(false);
    });
  }
  return (
    <>
      <Button
        style={{
          ...buttonStyle,
          position: "relative",
          left: "45%",
          top: "15px",
        }}
        className="btn btn-success"
        onClick={() => {
          setAddMode(true);
        }}
      >
        Create New Card
      </Button>
      <Container>
        {!isAddMode && <CardsComp></CardsComp>}
        {isAddMode && (
          <CreateCardComp createCardHandler={insertCard}>
            <h1>hola</h1>
          </CreateCardComp>
        )}
      </Container>
    </>
  );
}
export default MyCardsPage;
