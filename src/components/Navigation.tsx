import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`nav-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="nav-btn-line nav-btn-line line-1"></span>
        <span className="nav-btn-line nav-btn-line line-2"></span>
      </button>
    </>
  );
}
