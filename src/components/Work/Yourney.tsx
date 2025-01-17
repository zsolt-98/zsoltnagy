import Carousel from "react-bootstrap/Carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from "react-bootstrap/Image";
import test from "../../assets/yourney-hero.png";

export default function Yourney() {
  return (
    <div className="work-project-carousel-container d-flex position-relative w-100">
      <Carousel
        pause="hover"
        interval={3000}
        indicators={false}
        prevIcon={<ChevronLeft size={50} stroke="#58c4dc" />}
        nextIcon={<ChevronRight size={50} stroke="#58c4dc" className="" />}
        className="w-100 px-5"
      >
        <Carousel.Item>
          <Image src={test} className="w-100"></Image>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={test} className="w-100"></Image>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={test} className="w-100"></Image>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
