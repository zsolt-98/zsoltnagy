import Image from "react-bootstrap/Image";
import bgWorkDescription from "../../assets/bg-work-description.png";

export default function WorkProjectDescription() {
  return (
    <div className="work-project-description d-flex flex-column gap-4 w-90 text-light mx-0 mx-lg-7 p-3 p-sm-5 mb-6">
      <Image
        className={`work-bg-img-2 position-absolute h-100 w-100 opacity-25`}
        src={bgWorkDescription}
      />
      <p className="fs-6">
        Yourney is a premium car rental application that showcases my frontend
        development skills using modern React technologies.
      </p>
      <p className="fs-6">
        The application features a clean, responsive design built with Bootstrap
        and Sass, while using Zustand for efficient state management.
      </p>
      <p className="fs-6">
        I implemented user authentication flows including registration and login
        pages, demonstrating my understanding of form handling and client-side
        validation. The authentication data is stored in local storage,
        simulating how a real application would handle user sessions.
      </p>
      <p className="fs-6">
        The main booking interface allows users to browse available vehicles,
        select rental dates, and choose pickup/drop-off locations. The user
        profile section enables customers to update their profile information
        (username, first name, email address) and profile photo, as well as
        reset their password. Users can manage their active bookings through a
        simple dashboard interface.
      </p>
      <p className="fs-6">
        This project helped me gain hands-on experience with React development,
        state management, and frontend best practices while creating a
        functional demo that showcases these skills.
      </p>
    </div>
  );
}
