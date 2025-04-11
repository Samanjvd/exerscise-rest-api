import PropTypes from "prop-types";
import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ children, className, isOpen, toggle }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      role="alert"
    >
      <div
        className={`relative shadow-lg bg-slate-300 rounded-md overflow-hidden ${className}`}
      >
        <button
          type="button"
          className="absolute top-2 left-2 size-8 flex justify-center items-center rounded-md"
          onClick={toggle}
        >
          <IoClose className="size-5" />
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.array,
};

export default Modal;
