import React from 'react';

const Modal = ({ open = false, onClose = () => {}, children }) => {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-default-dark opacity-90" onClick={() => onClose()}></div>
        <div className="flex items-center min-h-screen">
          <div className="relative w-full flex">{children}</div>
        </div>
      </div>
    </>
  );
};

Modal.Card = ({ children }) => (
  <div className="relative w-full p-4 mx-auto bg-white rounded-md shadow-lg">{children}</div>
);

export default Modal;
