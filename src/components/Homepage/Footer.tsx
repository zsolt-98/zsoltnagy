import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import IconLinkedin from "../Icons/IconLinkedin";
import IconGithub from "../Icons/IconGithub";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";

interface FooterAnimation {
  footerTop: boolean;
  footerBottom: boolean;
}

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  const [animationStates, setAnimationStates] = useState<FooterAnimation>({
    footerTop: false,
    footerBottom: false,
  });

  const footerTopRef = useRef(null);
  const footerBottomRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section =
              entry.target === footerTopRef.current
                ? "footerTop"
                : entry.target === footerBottomRef.current
                ? "footerBottom"
                : null;

            if (section) {
              setAnimationStates((prev) => ({ ...prev, [section]: true }));
            }
          }
        });
      },
      { threshold: 0.75 }
    );

    if (footerTopRef.current) observer.observe(footerTopRef.current);
    if (footerBottomRef.current) observer.observe(footerBottomRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer className="footer-wrapper d-flex justify-content-center align-items-center position-relative">
      <div className="footer-bg-container">
        <div className="footer-bg-grain"></div>
      </div>
      <Container className="footer-content position-relative py-6">
        <Row
          className={`footer-top-wrapper ${isHomeRoute ? "home" : "not-home"} ${
            isHomeRoute ? (animationStates.footerTop ? "visible" : "") : ""
          } gap-6 gap-lg-0`}
          ref={footerTopRef}
        >
          <Col sm={12} lg={6}>
            <div className="d-flex flex-column gap-3">
              <h3 className="text-info fs-3 fw-light m-0">Connect with me</h3>
              <div>
                <Nav.Link
                  className="footer-email text-light p-0 fs-5 d-inline-block"
                  href="mailto:mailto:zsolt.nagy998@gmail.com"
                >
                  zsolt.nagy998@gmail.com
                </Nav.Link>
              </div>
            </div>
            <div className="d-flex mt-2">
              <Nav.Link
                className="footer-social p-0"
                href="https://linkedin.com/in/zsolt98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconLinkedin className="footer-social-icon" stroke="#e5e7eb" />
              </Nav.Link>
              <Nav.Link
                className="footer-social p-0"
                href="https://github.com/zsolt-98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconGithub className="footer-social-icon" stroke="#e5e7eb" />
              </Nav.Link>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className="d-flex flex-column gap-3 fs-4">
              <div>
                <Nav.Link
                  className="footer-link text-light p-0 d-inline-block w-auto"
                  onClick={() => {
                    navigate("/work");
                  }}
                >
                  My Work
                </Nav.Link>
              </div>
              <div>
                <Nav.Link
                  className="footer-link text-light p-0 d-inline-block w-auto"
                  onClick={() => {
                    navigate("/resume");
                  }}
                >
                  My résumé
                </Nav.Link>
              </div>
            </div>
          </Col>
        </Row>
        <div
          className={`footer-bottom-wrapper ${
            isHomeRoute ? "home" : "not-home"
          } ${
            isHomeRoute ? (animationStates.footerBottom ? "visible" : "") : ""
          }`}
          ref={footerBottomRef}
        >
          <div className="border-top border-light border-1 opacity-50 my-3 mt-6" />
          <div className="d-flex justify-content-between fs-5 text-light">
            <span>&copy; Zsolt Nagy</span>
            <span>2025</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
