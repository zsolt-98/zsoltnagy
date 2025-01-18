import Carousel from "react-bootstrap/Carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from "react-bootstrap/Image";

import yourneyHero from "../../assets/projects/yourney/yourney-hero-1848x1020.png";
import yourneyRegister from "../../assets/projects/yourney/yourney-register-1848x1020.png";
import yourneySignin from "../../assets/projects/yourney/yourney-signin-1848x1020.png";
import yourneyProfile from "../../assets/projects/yourney/yourney-profile-1848x1020.png";
import yourneyNoBookings from "../../assets/projects/yourney/yourney-no-bookings-1848x1020.png";
import yourneyModalVehicle from "../../assets/projects/yourney/yourney-modal-vehicle-1848x1020.png";
import yourneyModalBook from "../../assets/projects/yourney/yourney-modal-book-1848x1020.png";
import yourneyModalDetails from "../../assets/projects/yourney/yourney-modal-details-1848x1020.png";
import yourneyModalPayment from "../../assets/projects/yourney/yourney-modal-payment-1848x1020.png";
import yourneyModalConfirm from "../../assets/projects/yourney/yourney-modal-confirm-1848x1020.png";
import yourneyBookings from "../../assets/projects/yourney/yourney-bookings-1848x1020.png";
import { useMediaQuery } from "react-responsive";

export default function Yourney() {
  const isUnderLgScreen = useMediaQuery({ maxWidth: 575 });

  return (
    <div className="w-100 my-7 d-flex flex-column align-items-center gap-6">
      <div className="work-project-content d-flex flex-column w-90  gap-5 pt-5">
        <div className="work-project-title-container p-3 p-md-0 text-center">
          <h2 className="text-info display-6">
            <span className="text-light">/work/</span>yourney
            <span className="text-light ms-1">.</span>
          </h2>
          <p className="text-light fs-5">your-ney.netlify.app</p>
        </div>
        <div className="work-project-carousel-container d-flex position-relative w-100">
          <Carousel
            pause="hover"
            interval={2000}
            controls={isUnderLgScreen ? false : true}
            prevIcon={<ChevronLeft size={50} stroke="#58c4dc" />}
            nextIcon={<ChevronRight size={50} stroke="#58c4dc" />}
            className="w-100 pb-5 px-0 px-sm-5"
          >
            <Carousel.Item>
              <Image src={yourneyHero} fluid className=""></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={yourneyRegister} fluid className=""></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={yourneySignin} fluid className=""></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={yourneyProfile} fluid className=""></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={yourneyNoBookings} fluid className=""></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={yourneyModalVehicle} fluid className=""></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={yourneyModalBook} fluid className=""></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={yourneyModalDetails} fluid className=""></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={yourneyModalPayment} fluid className=""></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={yourneyModalConfirm} fluid className=""></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={yourneyBookings} fluid className=""></Image>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="work-project-description d-flex flex-column gap-4 w-90 text-light mx-0 mx-lg-7 p-5">
        <p className="fs-6">
          Yourney is a premium car rental application that showcases my frontend
          development skills using modern React technologies.
        </p>
        <p className="fs-6">
          While working on this project, I focused on implementing core React
          concepts and essential frontend functionalities. The application
          features a clean, responsive design built with Bootstrap and Sass,
          while using Zustand for efficient state management.
        </p>
        <p className="fs-6">
          I implemented user authentication flows including registration and
          login pages, demonstrating my understanding of form handling and
          client-side validation. The authentication data is stored in local
          storage, simulating how a real application would handle user sessions.
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
          This project helped me gain hands-on experience with React
          development, state management, and frontend best practices while
          creating a functional demo that showcases these skills.
        </p>
      </div>
    </div>
  );
}
