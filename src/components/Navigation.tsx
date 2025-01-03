import { useMediaQuery } from "react-responsive";

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Navigation({ isOpen, setIsOpen }: NavigationProps) {
  const isXXLargeScreen = useMediaQuery({ minWidth: 1401 });

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

      <div
        className={` ${
          isXXLargeScreen ? "nav-menu-side" : "nav-menu-overlay"
        } ${isOpen ? "open" : ""}`}
      >
        <div className="nav-menu-content min-vh-100 d-flex align-items-center p-3 p-xl-5">
          <nav className="d-flex flex-column justify-content-between">
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
        </div>
      </div>
    </>
  );
}
