import { useMediaQuery } from "react-responsive";

import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Nav from "react-bootstrap/Nav";

import logo from "../assets/zsn-logo-500x500.png";
import IconLinkedin from "./Icons/IconLinkedin";
import IconGithub from "./Icons/IconGithub";
import { useEffect, useState } from "react";
import useZustandStore from "../store/useZustandStore";
import { Link, useLocation } from "react-router";

interface NavigationAnimationStates {
  title: boolean;
  connect: boolean;
}

export default function Navigation() {
  const isSMScreen = useMediaQuery({ minWidth: 768 });
  const isXXLargeScreen = useMediaQuery({ minWidth: 1500 });
  const isSmallerVH = useMediaQuery({ maxHeight: 700 });
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { isOpen, setIsOpen } = useZustandStore();
  const [animationStates, setAnimationStates] =
    useState<NavigationAnimationStates>({
      title: false,
      connect: false,
    });

  useEffect(() => {
    setIsOpen(false);
  }, [location, setIsOpen]);

  useEffect(() => {
    if (isOpen && !isXXLargeScreen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen, isXXLargeScreen]);

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      const animations = [
        { key: "title", delay: 200 },
        { key: "connect", delay: 300 },
      ] as const;

      const timeouts = animations.map(({ key, delay }) =>
        setTimeout(
          () => setAnimationStates((prev) => ({ ...prev, [key]: true })),
          delay
        )
      );
      return () => {
        timeouts.forEach((timeout) => clearTimeout(timeout));
        setAnimationStates({
          title: false,
          connect: false,
        });
      };
    }
  }, [isOpen]);

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
        <Link to="/">
          <Image src={logo} className="w-100" />
        </Link>
      </div>

      <div
        className={` ${
          isXXLargeScreen ? "nav-menu-side" : "nav-menu-overlay"
        } ${isOpen ? "open" : ""} z-2`}
      >
        <div
          className={`nav-menu-content p-5 d-flex align-items-center justify-content-${
            !isXXLargeScreen
              ? `center w-100 ${isSmallerVH ? "min-" : ""}h-100`
              : "start"
          } ${isHomePage ? "home" : ""}`}
        >
          <Nav className="d-flex flex-column my-6 justify-content-between gap-6">
            <Stack
              gap={3}
              className={`nav-menu-title ${
                animationStates.title ? "animating" : ""
              } fs-4`}
            >
              <Link
                to="/work"
                className="nav-menu-content-title text-info p-0 text-decoration-none"
              >
                My Work
              </Link>
              <Link
                to="/resume"
                className="nav-menu-content-title text-info p-0 text-decoration-none"
              >
                My Résumé
              </Link>
            </Stack>

            <div
              className={`nav-menu-connect ${
                animationStates.connect ? "animating" : ""
              } `}
            >
              <h3 className="nav-menu-content-connect text-light fs-4 fw-light">
                Connect with me
              </h3>
              <div>
                <Nav.Link
                  className="nav-menu-content-email text-info p-0"
                  href="mailto:your.email@example.com"
                >
                  zsolt.nagy998@gmail.com
                </Nav.Link>
              </div>
              <div className="d-flex mt-2">
                <Nav.Link className="nav-menu-content-social p-0">
                  <IconLinkedin
                    className="nav-menu-social-icon"
                    size={!isXXLargeScreen ? (isSMScreen ? 50 : 35) : 30}
                    stroke="#58c4dc"
                  />
                </Nav.Link>
                <Nav.Link className="nav-menu-content-social p-0">
                  <IconGithub
                    className="nav-menu-social-icon"
                    size={!isXXLargeScreen ? (isSMScreen ? 50 : 35) : 30}
                    stroke="#58c4dc"
                  />
                </Nav.Link>
              </div>
            </div>
          </Nav>
        </div>
      </div>
    </>
  );
}
