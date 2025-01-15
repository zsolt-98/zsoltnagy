import Container from "react-bootstrap/Container";
import Navigation from "../Navigation";
import Image from "react-bootstrap/Image";

import bgWork from "../../assets/bg-work.png";
import yourneyLogo from "../../assets/yourney-logo.png";
import portfolioLogo from "../../assets/zsn-logo-270x63.png";

export default function Work() {
  return (
    <section className="min-vh-100 position-relative d-flex justify-content-between">
      <Image
        className="position-absolute w-100 h-100 z-1 opacity-25 py-5"
        src={bgWork}
      />
      <div className="work-bg-container position-absolute">
        <div className="work-bg-grain position-absolute" />
      </div>
      <Container className="d-flex justify-content-center align-items-center z-2 gap-3">
        <div className="">
          <div className="work-project-img d-flex justify-content-center align-items-center bg-light p-6">
            <Image src={yourneyLogo} className=" "></Image>
          </div>
          <div className="work-project-text p-4">
            <h3 className="text-light">Yourney</h3>
            <p className="mb-0 text-info">your-ney.netlify.app</p>
          </div>
        </div>
        <div className="">
          <div className="work-project-img d-flex justify-content-center align-items-center bg-light p-6 ">
            <Image src={portfolioLogo} className=""></Image>
          </div>
          <div className="work-project-text p-4">
            <h3 className="text-light">Personal Website</h3>
            <p className="mb-0 text-info">zsn.guru</p>
          </div>
        </div>
      </Container>
      <Navigation />
    </section>
  );
}
