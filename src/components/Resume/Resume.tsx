import Container from "react-bootstrap/Container";

import Navigation from "../Navigation";
import IconDownload from "../Icons/IconDownload";

import ResumePDF from "../../assets/Zsolt_Nagy_CV_Eng.pdf";
import useZustandStore from "../../store/useZustandStore";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import ResumeEng from "./ResumeEng";
import ResumeSrb from "./ResumeSrb";
import ResumeHun from "./ResumeHun";

export default function Resume() {
  const isXXLargeScreen = useMediaQuery({ minWidth: 1500 });
  const { isOpen } = useZustandStore();
  const [currentLang, setCurrentLang] = useState("eng");

  return (
    <>
      <section className="position-relative min-vh-100 d-flex justify-content-between">
        <div className="resume-bg-container position-absolute">
          <div className="resume-bg-grain position-absolute" />
        </div>
        <Container
          fluid="xl"
          className="resume-container position-relative d-flex
         justify-content-center align-items-center px-0 w-100 h-100 z-1"
        >
          <div
            className={`resume-wrapper w-90 ${
              !isXXLargeScreen && isOpen ? "invisible" : ""
            } d-flex flex-column p-3 p-xl-5 mb-6 mt-7 mx-md-6 position-relative z-2`}
          >
            <h2 className="mb-4 fs-1 text-info">Zsolt Nagy</h2>
            <div className="resume-language-download p-3 position-absolute d-flex gap-4">
              <div className="resume-language d-flex gap-1 text-light fw-light">
                <button
                  className="bg-transparent border-0 text-light"
                  onClick={() => {
                    setCurrentLang("eng");
                  }}
                >
                  ENG
                </button>
                <span>|</span>
                <button
                  className="bg-transparent border-0 text-light"
                  onClick={() => {
                    setCurrentLang("srb");
                  }}
                >
                  SRB
                </button>
                <span>|</span>
                <button
                  className="bg-transparent border-0 text-light"
                  onClick={() => {
                    setCurrentLang("hun");
                  }}
                >
                  HUN
                </button>
              </div>
              <a
                className="resume-download text-light text-decoration-none"
                href={ResumePDF}
                download="Zsolt_Nagy_CV_Eng.pdf"
              >
                <span>
                  <IconDownload
                    className="me-1 mb-1"
                    size={22}
                    stroke="none"
                    fill="#e5e7eb"
                  />
                </span>
                Download
              </a>
            </div>
            {currentLang === "eng" && <ResumeEng />}
            {currentLang === "srb" && <ResumeSrb />}
            {currentLang === "hun" && <ResumeHun />}
          </div>
        </Container>
        <Navigation />
      </section>
    </>
  );
}
