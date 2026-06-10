import React from "react";

function Modal({ id, title, content, footer, onClose }) {
  return (
    <div
      id={id || "modal-wrapper"}
      className="wrapper fixed inset-0 h-screen w-full bg-gray-100"
    >
      <div className="container flex flex-col gap-4 border text-center mx-auto  mt-32 max-w-2xl rounded-lg border-blue-600">
        <div className="title relative bg-blue-600 text-white font-semibold rounded-t-lg py-9 flex justify-center items-center">
          {title ? title : "Header"}
          <span
            className="absolute right-5 cursor-pointer text-3xl"
            onClick={onClose}
          >
            &times;
          </span>
        </div>
        <div className="content py-9 font-semibold">
          {content ? content : "This is body."}
        </div>
        <div className="footer bg-blue-600 text-white font-semibold rounded-b-lg py-9">
          {footer ? footer : "Footer"}
        </div>
      </div>
    </div>
  );
}

export default Modal;
