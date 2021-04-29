import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { Col, Row } from "./Container";

const useModal = () => {
  const [show, setShow] = useState(false);

  const toggle = {
    show: () => setShow(true),
    hide: () => setShow(false),
  };

  return { show, toggle };
};

const Modal = ({
  title,
  show,
  children,
  close,
  disabledDone,
  onDone,
  width,
}: {
  width?: number;
  title: string;
  show: boolean;
  onDone: () => void;
  children: JSX.Element;
  disabledDone?: boolean;
  close: () => void;
}) => {
  const modalEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    //modalEl.current?.classList.remove("modal-openning");
    //modalEl.current?.classList.remove("modal-closing");
    if (show) {
      modalEl.current?.classList.add("modal-openning");
      setTimeout(() => {
        modalEl.current?.classList.remove("modal-openning");
      }, 2000);
    }
  }, [show]);
  //
  return (
    <div
      ref={(ref) => {
        modalEl.current = ref;
      }}
      className={`modal bg-kl-dark-transparent ${show ? "d-block" : "d-none"}`}
      tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div
          className="modal-content rounded-8px bg-kl-dark-1 text-kl-light border-0"
          style={{ width: width, overflow: "hidden" }}>
          <div className="p-3" style={{ backgroundColor: "#303030" }}>
            <Row>
              <Col className="px-0">
                <div className="text-start">
                  <Button
                    onClick={() => {
                      close();
                    }}>
                    <div className="fw-light text-danger">Cancel</div>
                  </Button>
                </div>
              </Col>
              <Col>
                <div className="fw-bold">{title}</div>
              </Col>
              <Col className="px-0">
                <div className="text-end">
                  <Button
                    disabled={typeof disabledDone === "boolean" ? disabledDone : false}
                    onClick={() => {
                      if (!disabledDone) {
                        onDone();
                      }
                      //close();
                    }}>
                    <div className="fw-light">Done</div>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
          <div className="px-3 py-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export { Modal, useModal };
