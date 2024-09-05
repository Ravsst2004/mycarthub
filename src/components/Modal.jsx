import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ children }, ref) {
  const modalDialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modalDialog.current.showModal();
        document.body.style.overflow = "hidden";
      },

      close() {
        modalDialog.current.close();
        document.body.style.overflow = "auto";
      },
    };
  });

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      modalDialog.current.close();
      document.body.style.overflow = "auto";
    }
  };

  return (
    <dialog
      ref={modalDialog}
      onClick={handleClose}
      className="absolute bg-[#D3B17B] p-2 rounded-lg overflow-hidden"
    >
      {children}
      <div className="flex justify-end mt-2">
        <button
          onClick={handleClose}
          className="text-yellow-50 font-semibold bg-[#5F4E33] w-fit p-2 rounded-md"
        >
          Close
        </button>
      </div>
    </dialog>
  );
});

export default Modal;
