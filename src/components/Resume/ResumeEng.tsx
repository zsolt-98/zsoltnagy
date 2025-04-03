import IconLinkedin from "../Icons/IconLinkedin";
import IconGithub from "../Icons/IconGithub";
import IconLocation from "../Icons/IconLocation";
import IconEmail from "../Icons/IconEmail";
import IconUser from "../Icons/IconUser";

import Table from "react-bootstrap/Table";

export default function ResumeEng() {
  return (
    <>
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
            <IconUser className="me-1" size={22} stroke="none" fill="#e5e7eb" />
          </span>
          www.zsn.guru
        </a>
      </div>
      <p className="text-light mb-0">
        Web developer with strong problem-solving abilities and a passion for
        intuitive design. Specializes in full stack development with expertise
        in JavaScript, ReactJS and Node.js.
      </p>
      <div className="my-4 resume-divider border-top border-info" />
      <h3 className="fs-2 text-info mb-4">Professional Experience</h3>
      <h4 className="fs-3 text-info fw-normal mb-2 d-flex justify-content-between align-items-center">
        Employment summary
        <span className="d-none d-lg-inline fs-6 fw-light">
          July 2019 - Present
        </span>
      </h4>
      <h5 className="fs-4 text-info fst-italic fw-light mb-2">
        Work history across the United Kingdom and Serbia
      </h5>
      <ul className="text-light fs-6 fw-normal mb-0">
        <li className="">
          Managed and maintained multiple Shopify e-commerce websites, including
          content updates, theme customization, and code implementation.
        </li>
        <li className="">
          Optimized Meta Ads and Google Ads campaigns, improving conversion
          rates and site traffic.
        </li>
      </ul>
      <h3 className="fs-2 text-info my-4">Projects</h3>
      <h4 className="fs-3 text-info fw-normal mb-2">Pomegrenade</h4>
      <a
        href="https://pomegrenade.xyz/"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-project fs-4 text-info fst-italic fw-light mb-2 text-decoration-none"
      >
        https://pomegrenade.xyz/
      </a>
      <ul className="text-light fs-6 fw-normal mb-0">
        <li className="">
          Developed a full stack (MERN) calorie tracking application, using
          ReactJS, TypeScript, TailwindCSS, NodeJS, Express and MongoDB.
        </li>
        <li className="">
          Built a comprehensive nutrition dashboard, where users can log their
          daily caloric intake.
        </li>
        <li className="">
          Implemented a food search interface that queries and shows results
          from an external food diary API.
        </li>
        <li className="">
          Macronutrient data from the external API is displayed via a pie chart,
          that shows the values in percentages and grams, when adding a food
          entry or when editing one.
        </li>
        <li className="">
          Added customizable weight and macronutrient user goals.
        </li>
        <li className="">
          Integrated personalized user profiles, including updatable profile
          images, names, email addresses and self-service password reset
          functionality.
        </li>
        <li className="">
          When users reset their password or verify their email address, they
          receive a 6-digit verification code, which is sent to their respective
          email address.
        </li>
      </ul>
      <h4 className="fs-3 mt-4 text-info fw-normal mb-2">Yourney</h4>
      <a
        href="https://your-ney.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-project fs-4 text-info fst-italic fw-light mb-2 text-decoration-none"
      >
        https://your-ney.netlify.app/
      </a>
      <ul className="text-light fs-6 fw-normal mb-0">
        <li className="">
          Developed a premium car rental platform using ReactJS, JavaScript,
          Bootstrap, and Sass with Zustand for state management.
        </li>
        <li className="">
          Implemented complete user authentication flow including registration,
          sign-in, and password reset functionality.
        </li>
        <li className="">
          Built comprehensive booking system with vehicle selection, time and
          location scheduling.
        </li>
        <li className="">
          Created user profile system with frontend CRUD operations for profile
          management and booking creation/deletion.
        </li>
      </ul>
      <h3 className="fs-2 text-info my-4">Education</h3>
      <h4 className="fs-3 text-info fw-normal mb-2 d-flex justify-content-between align-items-center">
        Technical Secondary School "Ivan Sarić"
        <span className="d-none d-lg-inline fs-6 fw-light">
          Subotica, Serbia
        </span>
      </h4>
      <h5 className="fs-4 text-info fst-italic fw-light mb-2">
        Information Technology (IT) Technician
      </h5>
      <ul className="text-light fs-6 fw-normal mb-0">
        <li className="">
          Technical education with a focus on computer science, including
          programming languages, web development, and database management.
        </li>
      </ul>
      <h3 className="fs-2 text-info my-4">Skills</h3>
      <div className="table-responsive">
        <Table responsive borderless className="resume-table">
          <tbody>
            <tr>
              <td className="p-0 pe-6 fs-6 fw-normal text-light pb-3 pb-md-0">
                JavaScript
              </td>
              <td className="p-0 fs-6 fw-normal text-light HTML, CSS, Tailwind, Bootstrap, Sass, Express, MongoDB, Mongoose, PostgreSQL, Git, Shopify">
                ReactJS, TypeScript, Node.js
              </td>
            </tr>
            <tr>
              <td className="p-0 pe-6 fs-6  fw-normal text-light ">Web</td>
              <td className="p-0 fs-6 fw-normal text-light pb-3 pb-md-0">
                HTML, CSS, Tailwind, Bootstrap, Sass, Express, MongoDB,
                Mongoose, PostgreSQL, Git, Shopify
              </td>
            </tr>
            <tr>
              <td className="p-0 pe-6 fs-6 fw-normal text-light ">Design</td>
              <td className="p-0 fs-6 fw-normal text-light">Figma, Canva</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
