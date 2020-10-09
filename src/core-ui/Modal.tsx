import React, { FC, useRef } from "react";
import { createPortal } from "react-dom";
// We use portal API to create Modal component.
// For mpre info please visit https://reactjs.org/docs/portals.html#gatsby-focus-wrapper
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, children, onClose }) => {
  const modalRoot = useRef(document.getElementById("modal-root"));

  if (!modalRoot.current || !isOpen) {
    return null;
  }
  return createPortal(
    <div className="flex justify-center items-center fixed top-0 left-0 p-4 w-full h-full bg-gray-900 bg-opacity-75">
      <div className="relative rounded-sm bg-white">
        <button className="absolute top-0 right-0 mt-2 mr-2" onClick={onClose}>
          X
        </button>
        <div className="p-2">{children}</div>
      </div>
    </div>,
    modalRoot.current
  );
};

export default Modal;
