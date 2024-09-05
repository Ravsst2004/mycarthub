import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ children }, ref) {
  const modalDialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modalDialog.current.showModal();
      },
      close() {
        modalDialog.current.close();
      },
    };
  });

  return (
    <dialog ref={modalDialog} className="absolute bg-[#D3B17B] p-2 rounded-lg">
      {children}
      <form method="dialog" className="flex justify-end mt-2">
        <button className="text-yellow-50 font-semibold bg-[#5F4E33] w-fit p-2 rounded-md">
          Close
        </button>
      </form>
    </dialog>
  );
});

export default Modal;
