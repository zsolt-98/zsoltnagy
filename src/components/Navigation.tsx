import { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className={`nav-btn ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        <span className="nav-btn-line nav-btn-line line-1"></span>
        <span className="nav-btn-line nav-btn-line line-2"></span>
      </button>

      <Offcanvas
        show={isOpen}
        onHide={handleToggle}
        placement="end"
        backdrop={false}
        className="bg-transparent text-info"
      >
        <Offcanvas.Body>
          <nav className="d-flex flex-column justify-content-between h-100 p-4">
            <ul className="list-unstyled mb-5">
              <li className="mb-4">
                <a
                  href="/work"
                  className="text-info text-decoration-none fs-4 fw-semibold"
                >
                  My Work
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/shelf"
                  className="text-info text-decoration-none fs-4 fw-semibold"
                >
                  My Shelf
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/resume"
                  className="text-info text-decoration-none fs-4 fw-semibold"
                >
                  My Résumé
                </a>
              </li>
            </ul>

            <div className="mb-5">
              <h3 className="text-info fs-4 fw-semibold mb-4">Say Hello</h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a
                    href="mailto:your.email@example.com"
                    className="text-info text-decoration-none"
                  >
                    your.email@example.com
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://t.me/yourusername"
                    className="text-info text-decoration-none"
                  >
                    t.me/yourusername
                  </a>
                </li>
              </ul>
            </div>

            <div className="d-flex gap-4"></div>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
