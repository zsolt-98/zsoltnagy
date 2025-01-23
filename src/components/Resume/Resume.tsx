import Container from "react-bootstrap/Container";
import IconLinkedin from "../Icons/IconLinkedin";
import IconGithub from "../Icons/IconGithub";
import IconLocation from "../Icons/IconLocation";
import IconEmail from "../Icons/IconEmail";
import IconUser from "../Icons/IconUser";
import FooterHomepage from "../Homepage/FooterHomepage";

import Table from "react-bootstrap/Table";
import Navigation from "../Navigation";
import IconDownload from "../Icons/IconDownload";

import ResumePDF from "../../assets/Zsolt_Nagy_CV_Eng.pdf";

export default function Resume() {
  return (
    <>
      <section className="position-relative d-flex justify-content-between">
        <div className="resume-bg-container position-absolute">
          <div className="resume-bg-grain position-absolute" />
        </div>
        <Container
          fluid="xl"
          className="resume-container position-relative d-flex
         justify-content-center align-items-center px-0 w-100 h-100 z-1"
        >
          <div className="resume-wrapper w-90 d-flex flex-column p-3 p-xl-5 my-6 mx-md-6 position-relative z-2">
            <h2 className="mb-4 fs-1 text-info">Zsolt Nagy</h2>
            <a
              className="resume-download text-light text-decoration-none position-absolute p-3"
              href="../../assets/Zsolt_Nagy_CV_Eng.pdf"
              download={ResumePDF}
            >
              <span>
                <IconDownload
                  className="me-1 mb-1"
                  size={22}
                  stroke="none"
                  fill="#e5e7eb"
                />
              </span>
              Download
            </a>
            <div className="d-flex flex-wrap gap-4 text-light mb-4">
              <p className="fs-6 fw-normal mb-0">
                <span>
                  <IconLocation
                    className="me-1"
                    size={22}
                    stroke="none"
                    fill="#e5e7eb"
                  />
                </span>
                Subotica, Serbia
              </p>
              <a
                className="resume-link-fill fs-6 text-light fw-normal text-decoration-none mb-0"
                href="mailto:zsolt.nagy998@gmail.com"
              >
                <span>
                  <IconEmail
                    className="me-1"
                    size={22}
                    stroke="none"
                    fill="#e5e7eb"
                  />
                </span>
                zsolt.nagy998@gmail.com
              </a>
              <a
                className="resume-link-stroke fs-6 text-light fw-normal text-decoration-none mb-0"
                href="https://github.com/zsolt-98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <IconGithub className="me-1" size={25} stroke="#e5e7eb" />
                </span>
                zsolt-98
              </a>
              <a
                className="resume-link-stroke fs-6 text-light fw-normal text-decoration-none mb-0"
                href="https://linkedin.com/in/zsolt98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <IconLinkedin className="me-1" size={25} stroke="#e5e7eb" />
                </span>
                zsolt98
              </a>
              <a
                className="resume-link-fill fs-6 text-light fw-normal text-decoration-none mb-0"
                href="https://zsn.guru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <IconUser
                    className="me-1"
                    size={22}
                    stroke="none"
                    fill="#e5e7eb"
                  />
                </span>
                www.zsn.guru
              </a>
            </div>
            <p className="text-light mb-0">
              Web developer with a passion for intuitive design and strong
              problem-solving abilities. Specializes infrontend development with
              expertise in JavaScript and ReactJS, crafting responsive and
              user-focusedweb applications.
            </p>
            <div className="my-4 resume-divider border-top border-info" />
            <h3 className="fs-2 text-info mb-4">Professional Experience</h3>
            <h4 className="fs-3 text-info fw-normal mb-2">
              Employment summary
            </h4>
            <h5 className="fs-4 text-info fst-italic fw-light mb-2">
              Work history across the United Kingdom and Serbia
            </h5>
            <ul className="text-light fs-6 fw-normal mb-0">
              <li className="">
                Managed and maintained multiple Shopify e-commerce websites,
                including content updates, themecustomization, and code
                implementation.
              </li>
              <li className="">
                Optimized Meta Ads and Google Ads campaigns, improving
                conversion rates and site traffic.
              </li>
              <li className="">
                Provided customer support with a proven track record of high
                satisfaction ratings and successfulupselling initiatives.
              </li>
            </ul>

            <h3 className="fs-2 text-info my-4">Projects</h3>
            <h4 className="fs-3 text-info fw-normal mb-2">Yourney</h4>
            <h5 className="fs-4 text-info fst-italic fw-light mb-2">
              https://your-ney.netlify.app/
            </h5>
            <ul className="text-light fs-6 fw-normal mb-0">
              <li className="">
                Developed a premium car rental platform using ReactJS,
                JavaScript, Bootstrap, and Sass withZustand for state
                management.
              </li>
              <li className="">
                Implemented complete user authentication flow including
                registration, sign-in, and password resetfunctionality.
              </li>
              <li className="">
                Built comprehensive booking system with vehicle selection, time
                and location scheduling.
              </li>
              <li className="">
                Created user profile system with frontend CRUD operations for
                profile management and bookingcreation/deletion.
              </li>
            </ul>

            <h3 className="fs-2 text-info my-4">Education</h3>
            <h4 className="fs-3 text-info fw-normal mb-2">
              Technical Secondary School "Ivan Sarić"
            </h4>
            <h5 className="fs-4 text-info fst-italic fw-light mb-2">
              Information Technology (IT) Technician
            </h5>
            <ul className="text-light fs-6 fw-normal mb-0">
              <li className="">
                Technical education with a focus on computer science, including
                programming languages, webdevelopment, and database management.
              </li>
            </ul>

            <h3 className="fs-2 text-info my-4">Skills</h3>
            <div className="table-responsive">
              <Table responsive borderless className="resume-table">
                <tbody>
                  <tr>
                    <td className="p-0 pe-6 fs-6 fw-normal text-light ">
                      JavaScript
                    </td>
                    <td className="p-0 fs-6 fw-normal text-light">
                      ReactJS, TypeScript
                    </td>
                  </tr>

                  <tr>
                    <td className="p-0 pe-6 fs-6 fw-normal text-light ">Web</td>
                    <td className="p-0 fs-6 fw-normal text-light">
                      HTML, CSS, Sass, Bootstrap, PostgreSQL, Git, Citrix
                    </td>
                  </tr>

                  <tr>
                    <td className="p-0 pe-6 fs-6 fw-normal text-light ">
                      Design
                    </td>
                    <td className="p-0 fs-6 fw-normal text-light">
                      Figma, Canva
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
        <Navigation />
      </section>
      <FooterHomepage />
    </>
  );
}
