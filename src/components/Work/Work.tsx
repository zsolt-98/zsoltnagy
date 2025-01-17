import Container from "react-bootstrap/Container";
import Navigation from "../Navigation";
import Image from "react-bootstrap/Image";

import { useMediaQuery } from "react-responsive";
import useZustandStore from "../../store/useZustandStore";

import bgWork from "../../assets/bg-work.png";
import yourneyLogo from "../../assets/yourney-logo.png";
import yourneyHero from "../../assets/yourney-hero.png";
import yourneyHeroMd from "../../assets/yourney-hero-md.png";
import yourneyHeroSm from "../../assets/yourney-hero-sm.png";
import portfolioLogo from "../../assets/zsn-logo-270x63.png";
import portfoliHero from "../../assets/portfolio-hero.png";
import { Outlet, useLocation, useNavigate } from "react-router";

export default function Work() {
  const isXXLargeScreen = useMediaQuery({ minWidth: 1500 });
  const isXLScreen = useMediaQuery({ minWidth: 1200 });
  const isUnderMdScreen = useMediaQuery({ maxWidth: 460 });
  const isUnderSmScreen = useMediaQuery({ maxWidth: 390 });
  const { isOpen } = useZustandStore();
  const navigate = useNavigate();
  const location = useLocation();
  const isYourneyRoute = location.pathname === "/work/yourney";

  // if (isYourneyRoute) {
  //   return
  // }

  return (
    <section className="min-vh-100 position-relative d-flex justify-content-between">
      <Image
        className={`position-absolute w-100 h-100 z-1 opacity-25 py-5 ${
          !isXLScreen ? "object-fit-cover" : ""
        }`}
        src={bgWork}
      />
      <div className="work-bg-container position-absolute">
        <div className="work-bg-grain position-absolute" />
      </div>
      <Container
        className={`work-project-container d-flex
         justify-content-center align-items-center z-2 px-0`}
      >
        {isYourneyRoute ? (
          <Outlet />
        ) : (
          <div
            className={`work-project-main ${
              !isXXLargeScreen && isOpen ? "d-none" : "d-flex"
            } flex-column px-3 py-6 p-sm-5 gap-5 my-7`}
          >
            <div className="work-project-title-container p-3 p-md-0 text-center">
              <h2 className="text-light display-4">
                <span className="text-info">/</span>work
                <span className="text-info ms-1">.</span>
              </h2>
              <p className="text-info fs-5">
                A collection of the projects that I have worked on.
              </p>
            </div>
            <div className="d-flex gap-5 gap-xl-3 justify-content-center flex-column flex-xl-row">
              <button
                className="border-0 bg-transparent p-0"
                onClick={() => navigate("yourney")}
              >
                <figure className="work-project-figure m-0">
                  <div className="work-project-img position-relative bg-light px-5 px-md-6 p-6">
                    <div className="default-state d-flex justify-content-center align-items-center w-100 h-100">
                      <Image src={yourneyLogo} className="img-fluid" />
                    </div>
                    <div className="hover-state position-absolute top-0 start-0 w-100 h-100">
                      <Image
                        src={
                          isUnderSmScreen
                            ? yourneyHeroSm
                            : isUnderMdScreen
                            ? yourneyHeroMd
                            : yourneyHero
                        }
                        className="w-100 h-100 object-fit-cover"
                        style={{
                          transform: "translateZ(0)",
                          backfaceVisibility: "hidden",
                        }}
                      />
                    </div>
                  </div>
                  <figcaption className="work-project-text text-start p-4">
                    <h3 className="text-info">Yourney</h3>
                    <p className="mb-0 text-light">your-ney.netlify.app</p>
                  </figcaption>
                </figure>
              </button>
              <button className="border-0 bg-transparent p-0">
                <figure className="work-project-figure m-0">
                  <div className="work-project-img position-relative bg-light px-5 px-md-6 p-6">
                    <div className="default-state d-flex justify-content-center align-items-center w-100 h-100">
                      <Image src={portfolioLogo} className="img-fluid" />
                    </div>
                    <div className="hover-state position-absolute top-0 start-0 w-100 h-100">
                      <Image
                        src={portfoliHero}
                        className="w-100 h-100 object-fit-cover"
                        style={{
                          transform: "translateZ(0)",
                          backfaceVisibility: "hidden",
                        }}
                      />
                    </div>
                  </div>
                  <figcaption className="work-project-text text-start p-4">
                    <h3 className="text-info">Personal Website</h3>
                    <p className="mb-0 text-light">zsn.guru</p>
                  </figcaption>
                </figure>
              </button>
            </div>
          </div>
        )}
      </Container>
      <Navigation />
    </section>
  );
}
