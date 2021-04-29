import { useState } from "react";
import Button from "./Component/Button";
import Form from "./Component/Form";
import Input from "./Component/Input";
import { Modal } from "./Component/Modal";
import { useKeyValue } from "./helper";

const mykeys = ["id", "password"];

const useMyModalForm = () => {
  const form = useKeyValue(mykeys);

  const enabledSubmit = () => {
    const idCheck = form.getValue("id").toString().length >= 8;
    const passwordCheck = form.getValue("password").toString().length >= 8;
    return idCheck && passwordCheck;
  };

  return { form, enabledSubmit };
};

const MyModal = ({ message /* test props */ }: { message: string }) => {
  const [showModal, setShowModal] = useState(false);
  const { form, enabledSubmit } = useMyModalForm();

  const onSubmit = async () => {
    console.log(form.getValue("id").toString(), form.getValue("password").toString());
    setShowModal(false);
  };

  const toggleModal = (show: boolean) => {
    setShowModal(show);
  };

  return (
    <div className="pt-5">
      <div>
        <Button
          color="blue3"
          onClick={() => {
            setShowModal(true);
          }}>
          Open Modal
        </Button>
      </div>
      {
        <Modal
          close={() => {
            /* try not to directly pass a setState function. ! 
          Instead, we pass a custom setState function.
        */
            toggleModal(false);
          }}
          title="Hello world input"
          show={showModal}
          disabledDone={!enabledSubmit()}
          onDone={onSubmit}>
          <div>
            <div>{message}</div>
            <div>
              <Form onSubmit={onSubmit} enabledSubmit={enabledSubmit()}>
                <div className="pt-2">
                  <div className="pt-2">
                    <Input
                      type="text"
                      icon="fas fa-user-lock"
                      placeholder="ID"
                      value={form.getValue("id") as string}
                      onChange={(value) => {
                        form.updateValue("id", value);
                      }}
                    />
                  </div>
                  <div className="pt-2">
                    <Input
                      type="password"
                      icon="fas fa-lock"
                      placeholder="Password"
                      value={form.getValue("password") as string}
                      onChange={(value) => {
                        form.updateValue("password", value);
                      }}
                    />
                  </div>
                  <div>
                    {/* submit button required for submitting through enter/return key */}
                    <Button type="submit"></Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </Modal>
      }
    </div>
  );
};

export default MyModal;
