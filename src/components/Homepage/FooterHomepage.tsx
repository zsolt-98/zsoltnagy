import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import IconLinkedin from "../Icons/IconLinkedin";
import IconGithub from "../Icons/IconGithub";

export default function FooterHomepage() {
  return (
    <footer className="footer-wrapper d-flex justify-content-center align-items-center position-relative">
      <div className="footer-bg-container">
        <div className="footer-bg-grain"></div>
      </div>
      <Container fluid="md" className="footer-content position-relative py-6">
        <Row>
          <Col sm={4}>
            <h3 className="text-light fs-3 fw-light">Connect with me</h3>
            <div>
              <Nav.Link
                className="nav-menu-content-email text-info p-0 fs-5 d-inline-block"
                href="mailto:your.email@example.com"
              >
                zsolt.nagy998@gmail.com
              </Nav.Link>
            </div>
            <div className="d-flex mt-2">
              <Nav.Link className="nav-menu-content-social p-0">
                <IconLinkedin
                  className="nav-menu-social-icon"
                  stroke="#58c4dc"
                />
              </Nav.Link>
              <Nav.Link className="nav-menu-content-social p-0">
                <IconGithub className="nav-menu-social-icon" stroke="#58c4dc" />
              </Nav.Link>
            </div>
          </Col>
          <Col sm={4}>
            <div className="d-flex flex-column gap-3 fs-3">
              <Nav.Link
                className="nav-menu-content-title text-info p-0 d-inline-block"
                href="/work"
              >
                My Work
              </Nav.Link>
              <Nav.Link
                className="nav-menu-content-title text-info p-0 d-inline-block"
                href="/work"
              >
                My résumé
              </Nav.Link>
            </div>
          </Col>
        </Row>
        <div className="border-top border-light border-1 opacity-50 my-3 mt-6" />
        <div className="d-flex justify-content-between fs-5 text-light">
          <span className="">&copy; Zsolt Nagy</span>
          <span className="">2025</span>
        </div>
      </Container>
    </footer>
  );
}
