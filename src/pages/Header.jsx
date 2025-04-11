import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-5xl bg-slate-100 mt-4 mb-12 py-4 px-4 rounded flex justify-between items-center">
      <h1 className="font-bold text-xl">User List</h1>
      <button
        className="px-8 py-2 bg-lime-700 rounded"
        onClick={() => navigate("/login", { replace: true })}
      >
        login
      </button>
    </div>
  );
}

Header.propTypes = {};

export default Header;
