import { useMediaQuery } from "react-responsive";

import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Nav from "react-bootstrap/Nav";

import logo from "../assets/zsn-logo-500x500.png";
import IconLinkedin from "./Icons/IconLinkedin";
import IconGithub from "./Icons/IconGithub";

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

      <div className="nav-logo-container">
        <Image src={logo} className="w-100" />
      </div>

      <div
        className={` ${
          isXXLargeScreen ? "nav-menu-side" : "nav-menu-overlay"
        } ${isOpen ? "open" : ""}`}
      >
        <div className="nav-menu-content min-vh-100 d-flex align-items-center p-3 p-xl-5">
          <Nav className="d-flex flex-column justify-content-between gap-6">
            <Stack gap={3} className="fs-4">
              <Nav.Link className="text-info p-0" href="/work">
                My Work
              </Nav.Link>
              <Nav.Link className="text-info p-0" href="/work">
                My résumé
              </Nav.Link>
            </Stack>

            <div>
              <h3 className="text-light fs-4 fw-light">Connect with me</h3>
              <div>
                <Nav.Link
                  className="text-info p-0"
                  href="mailto:your.email@example.com"
                >
                  zsolt.nagy998@gmail.com
                </Nav.Link>
              </div>
              <div className="d-flex mt-2">
                <Nav.Link className="p-0">
                  <IconLinkedin size={30} stroke="#58c4dc" />
                </Nav.Link>
                <Nav.Link className="p-0">
                  <IconGithub size={30} stroke="#58c4dc" />
                </Nav.Link>
              </div>
            </div>
          </Nav>
        </div>
      </div>
    </>
  );
}
