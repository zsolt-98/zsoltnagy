import { useMediaQuery } from "react-responsive";
import useZustandStore from "../../store/useZustandStore";

export function PomegrenadeDescription() {
  const isXXLargeScreen = useMediaQuery({ minWidth: 1500 });
  const { isOpen } = useZustandStore();

  return (
    <div
      className={`work-project-description ${
        !isXXLargeScreen && isOpen ? "d-none" : "d-flex"
      } flex-column gap-4 w-90 text-light mx-0 mx-lg-7 p-3 p-sm-5 z-1 mb-6`}
    >
      <p className="fs-6">
        Pomegrenade is a simple calorie and macronutrient tracking application
        built using the MERN stack. It features a user-friendly interface for
        monitoring daily diet.
      </p>
      <p className="fs-6">
        The application allows users to track their caloric intake, view
        macronutrient details of food items in a pie chart, add foods to the
        chart by using an external API.
      </p>
      <p className="fs-6">
        It also has a user profile section, where users can edit their weight
        goals, macronutrient goals, update their first name and email address.
      </p>
      <p className="fs-6">
        It features a secure authentication system using JWT tokens with cookies
        to provide safe user sessions. When resetting their password or
        verifying their email address, users are provided with a 6-digit
        verification code, which is sent to their respective email address.
      </p>
      <p className="fs-6">
        This project best reflects my full-stack development, secure
        authentication, and dynamic data visualization capabilities.
      </p>
      <p className="fs-6 ">
        <span className="text-decoration-underline">
          Technologies & Libraries used:
        </span>
        <br />
        <span className="mt-2 d-block">
          Frontend: React, TypeScript, Tailwind CSS, ShadCN, React Hook Form,
          Recharts, Toastify, Axios, Framer Motion
          <br />
          Backend: Node.js, Express, MongoDB, Mongoose, JWT, Nodemailer
        </span>
      </p>
    </div>
  );
}
