import React, { useState } from "react";
import Modal from "./Modal";

function ModalPage() {
  const [isModalActive, setIsModalActive] = useState(false);

  function handleModal() {
    setIsModalActive((prev) => !prev);
    console.log("Closing");
  }

  return (
    <>
      {!isModalActive && (
        <button
          onClick={() => handleModal()}
          className="bg-cyan-600 text-white rounded-lg px-5 py-2 mt-10 block mx-auto hover:bg-green-600 hover:text-white cursor-pointer"
        >
          Open Modal
        </button>
      )}
      {isModalActive && <Modal onClose={() => handleModal()} title={"Title"} content={"Content"} footer={"footer"} />}
    </>
  );
}

export default ModalPage;
