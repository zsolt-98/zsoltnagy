import Carousel from "react-bootstrap/Carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from "react-bootstrap/Image";

import hero from "../../assets/projects/pomegrenade/pomegrenade-hero-1848x1020px.png";
import emptyDashboard from "../../assets/projects/pomegrenade/1-empty-dashboard-1848x1020px.png";
import emptyDashboardAddFood from "../../assets/projects/pomegrenade/2-empty-dashboard-add-food-1848x1020px.png";
import emptyDashboardSelectedFood from "../../assets/projects/pomegrenade/3-empty-dashboard-selected-food-1848x1020px.png";
import dashboardWithAddedFoods from "../../assets/projects/pomegrenade/4-dashboard-with-added-foods-1848x1020px.png";
import dashboardEditAddedFood from "../../assets/projects/pomegrenade/5-dashboard-edit-added-food-1848x1020px.png";
import userGoals from "../../assets/projects/pomegrenade/6-user-goals-1848x1020px.png";
import userGoalsEditWeight from "../../assets/projects/pomegrenade/7-user-goals-edit-weight-1848x1020px.png";
import userGoalsEditMacros from "../../assets/projects/pomegrenade/8-user-goals-edit-macronutrients-1848x1020px.png";
import userProfile from "../../assets/projects/pomegrenade/9-user-profile-1848x1020px.png";

import { useMediaQuery } from "react-responsive";
import useZustandStore from "../../store/useZustandStore";

export default function Pomegrenade() {
  const isUnderLgScreen = useMediaQuery({ maxWidth: 575 });
  const isXXLargeScreen = useMediaQuery({ minWidth: 1500 });
  const { isOpen } = useZustandStore();

  const images = [
    hero,
    emptyDashboard,
    emptyDashboardAddFood,
    emptyDashboardSelectedFood,
    dashboardWithAddedFoods,
    dashboardEditAddedFood,
    userGoals,
    userGoalsEditWeight,
    userGoalsEditMacros,
    userProfile,
  ];

  return (
    <div className="w-100 my-6 d-flex flex-column align-items-center gap-6">
      <div
        className={`work-project-content ${
          !isXXLargeScreen && isOpen ? "d-none" : "d-flex"
        } flex-column w-90 gap-5 pt-5`}
      >
        <div className="work-project-title-container px-sm-5 p-md-0 text-center">
          <div className="p-3 p-md-0 ">
            <h2 className="text-info display-6">
              <span className="text-light">/work/</span>pomegrenade
              <span className="text-light ms-1">.</span>
            </h2>
            <a
              href="https://pomegrenade.xyz"
              className="work-project-link text-light fs-5 text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              pomegrenade.xyz
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
            {images.map((image) => (
              <Carousel.Item>
                <Image src={image} fluid />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
