import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useRef } from "react";
function EditCardComp({ clickHandler, card }) {
  const bizNameRef = useRef();
  const bizDescRef = useRef();
  const bizAddressRef = useRef();
  const bizPhoneRef = useRef();
  const bizImgRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const bizName = bizNameRef.current.value;
    const bizDesc = bizDescRef.current.value;
    const bizAddress = bizAddressRef.current.value;
    const bizPhone = bizPhoneRef.current.value;
    const bizImg = bizImgRef.current.value;

    const data = {
      bizName,
      bizDescription: bizDesc,
      bizAddress,
      bizPhone,
      // bizImage: bizImg,
    };
    if (
      bizName === "" ||
      bizDesc === "" ||
      bizAddress === "" ||
      bizPhone === ""
    ) {
      toast.error("Please fill all the fields");
    } else {
      clickHandler(data);
    }
    console.log({ bizName, bizDesc, bizAddress, bizPhone, bizImg });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicBusinessName">
        <Form.Label>Business Name</Form.Label>
        <Form.Control
          defaultValue={card.bizName}
          type="text"
          ref={bizNameRef}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessDescription">
        <Form.Label>Business Description</Form.Label>
        <Form.Control
          defaultValue={card.bizDescription}
          type="text"
          ref={bizDescRef}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessAddress">
        <Form.Label>Business Address</Form.Label>
        <Form.Control
          defaultValue={card.bizAddress}
          type="text"
          ref={bizAddressRef}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessPhone">
        <Form.Label>Business Phone</Form.Label>
        <Form.Control
          defaultValue={card.bizPhone}
          type="text"
          ref={bizPhoneRef}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessImage">
        <Form.Label>Business Image</Form.Label>
        <Form.Control type="text" ref={bizImgRef} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={submitHandler}>
        EditCard
      </Button>
    </Form>
  );
}
export default EditCardComp;
