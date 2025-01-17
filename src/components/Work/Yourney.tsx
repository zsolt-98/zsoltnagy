import Carousel from "react-bootstrap/Carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from "react-bootstrap/Image";
import test from "../../assets/yourney-hero.png";

import yourneyHero from "../../assets/projects/yourney/yourney-hero-1848x1020.png";
import yourneyRegister from "../../assets/projects/yourney/yourney-register-1848x1020.png";
import yourneySignin from "../../assets/projects/yourney/yourney-signin-1848x1020.png";
import yourneyProfile from "../../assets/projects/yourney/yourney-profile-1848x1020.png";

export default function Yourney() {
  return (
    <div className="my-7 d-flex flex-column gap-6">
      <div className="work-project-content d-flex flex-column w-100  gap-5 py-5">
        <div className="work-project-title-container p-3 p-md-0 text-center">
          <h2 className="text-light display-4">
            <span className="text-info">/work/</span>yourney
            <span className="text-info ms-1">.</span>
          </h2>
          <p className="text-info fs-5">your-ney.netlify.app</p>
        </div>
        <div className="work-project-carousel-container d-flex position-relative w-100">
          <Carousel
            pause="hover"
            interval={2000}
            prevIcon={<ChevronLeft size={50} stroke="#58c4dc" />}
            nextIcon={<ChevronRight size={50} stroke="#58c4dc" />}
            className="w-100 px-5"
          >
            <Carousel.Item>
              <Image src={yourneyHero} className="w-100"></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={yourneyRegister} className="w-100"></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={yourneySignin} className="w-100"></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={yourneyProfile} className="w-100"></Image>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="work-project-description d-flex flex-column gap-4 text-info mx-7 p-5">
        <p className="fs-5">
          Yourney is a premium car rental application that showcases my frontend
          development skills using modern React technologies.
        </p>
        <p className="fs-5">
          While working on this project, I focused on implementing core React
          concepts and essential frontend functionalities. The application
          features a clean, responsive design built with Bootstrap and Sass,
          while using Zustand for efficient state management.
        </p>
        <p className="fs-5">
          I implemented user authentication flows including registration and
          login pages, demonstrating my understanding of form handling and
          client-side validation. The authentication data is stored in local
          storage, simulating how a real application would handle user sessions.
        </p>
        <p className="fs-5">
          The main booking interface allows users to browse available vehicles,
          select rental dates, and choose pickup/drop-off locations. The user
          profile section enables customers to update their profile information
          (username, first name, email address) and profile photo, as well as
          reset their password. Users can manage their active bookings through a
          simple dashboard interface.
        </p>
        <p className="fs-5">
          This project helped me gain hands-on experience with React
          development, state management, and frontend best practices while
          creating a functional demo that showcases these skills.
        </p>
      </div>
    </div>
  );
}
