import { Button, DropdownButton, Dropdown, Modal, FormControl, Form, InputGroup } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TimePicker from "react-bootstrap-time-picker";
import "./App.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="ModalTitle">
          New Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group controlId="form-title">
          <Form.Control type="text" placeholder="Title" />
          <Form.Control type="text" placeholder="Location" />
        </Form.Group>
        <Form.Group controlId="form-body">
          <Form.Check type="checkbox" label="All day" />
        </Form.Group>
        <Form.Group controlId="dob">
          <Form.Label>Starts</Form.Label>
            <Form.Control type="date" name="dob" placeholder="Date" />
            <TimePicker start="00:00" end="23:45" step={15} />
        </Form.Group>
        
        <Form.Group controlId="dob">
          <Form.Label>Ends</Form.Label>
            <Form.Control type="date" name="dob" placeholder="Date" />
            <TimePicker start="00:00" end="23:45" step={15} />
        </Form.Group>
        <Form.Group controlId="form-body">
          <Form.Check type="checkbox" label="Repeat" />
        </Form.Group>
        <Form.Group controlId="dob">
          <Form.Label>Alert</Form.Label>
            <TimePicker start="00:00" end="23:45" step={15} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Note</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-light" onClick={props.onHide}>Close</Button>
        <Button onClick={props.onHide}>Done</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

// render(<App />);
export default App;