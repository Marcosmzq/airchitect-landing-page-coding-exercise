import ModalImg from "./ModalImg";
import ModalText from "./ModalText";

const Modal = ({ closeModal }) => {
  return (
    <div className="w-full min-h-screen bg-gray-200 bg-opacity-90 flex flex-wrap sm:flex-nowrap sm:items-center justify-center fixed inset-0 z-10">
      <div className="w-full h-full md:my-4 md:h-3/4 md:w-3/4 bg-white rounded-xl shadow-2xl flex flex-col md:flex-row">
        <ModalImg />
        <ModalText closeModal={closeModal} />
      </div>
    </div>
  );
};

export default Modal;
