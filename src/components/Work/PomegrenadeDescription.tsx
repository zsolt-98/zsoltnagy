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
        Pomegrenade is a calorie and macronutrient tracking application built
        using MERN stack. It features a user-friendly interface for monitoring
        daily diet.
      </p>
      <p className="fs-6">
        It has a secure authentication system using JWT tokens with cookies to
        provide safe user sessions. The application allows users to track their
        caloric intake, view macronutrient details of food items in a pie chart,
        add foods to the chart by using an external API.
      </p>
      <p className="fs-6">
        I implemented a user profile section, where users can edit their weight
        goals, macronutrient goals, update their first name, email address and
        reset their password through self-service.
      </p>
      <p className="fs-6">
        This project best reflects my full-stack development, secure
        authentication, and dynamic data visualization capabilities.
      </p>
      <p className="fs-6">
        Tech Stack & Libraries <br /> Frontend: React, TypeScript, Tailwind CSS,
        ShadCN, React Hook Form, Recharts, Toastify, Axios, Framer Motion
        <br />
        Backend: Node.js, Express, MongoDB, Mongoose, JWT, Nodemailer
      </p>
    </div>
  );
}
