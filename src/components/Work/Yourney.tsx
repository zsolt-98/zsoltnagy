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
    <div className="w-100 my-6 d-flex flex-column align-items-center gap-6">
      <div className="work-project-content d-flex flex-column w-90  gap-5 pt-5">
        <div className="work-project-title-container px-sm-5 p-md-0 text-center">
          <div className="p-3 p-md-0 ">
            <h2 className="text-info display-6">
              <span className="text-light">/work/</span>yourney
              <span className="text-light ms-1">.</span>
            </h2>
            <a
              href="https://your-ney.netlify.app"
              className="work-project-link text-light fs-5 text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              your-ney.netlify.app
            </a>
          </div>
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
    </div>
  );
}
