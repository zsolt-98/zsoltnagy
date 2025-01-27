import IconLinkedin from "../Icons/IconLinkedin";
import IconGithub from "../Icons/IconGithub";
import IconLocation from "../Icons/IconLocation";
import IconEmail from "../Icons/IconEmail";
import IconUser from "../Icons/IconUser";

import Table from "react-bootstrap/Table";

export default function ResumeHun() {
  return (
    <>
      <div className="d-flex flex-wrap gap-4 text-light mb-4">
        <p className="fs-6 fw-normal mb-0">
          <span>
            <IconLocation
              className="me-1"
              size={22}
              stroke="none"
              fill="#e5e7eb"
            />
          </span>
          Szabadka, Szerbia
        </p>
        <a
          className="resume-link-fill fs-6 text-light fw-normal text-decoration-none mb-0"
          href="mailto:zsolt.nagy998@gmail.com"
        >
          <span>
            <IconEmail
              className="me-1"
              size={22}
              stroke="none"
              fill="#e5e7eb"
            />
          </span>
          zsolt.nagy998@gmail.com
        </a>
        <a
          className="resume-link-stroke fs-6 text-light fw-normal text-decoration-none mb-0"
          href="https://github.com/zsolt-98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <IconGithub className="me-1" size={25} stroke="#e5e7eb" />
          </span>
          zsolt-98
        </a>
        <a
          className="resume-link-stroke fs-6 text-light fw-normal text-decoration-none mb-0"
          href="https://linkedin.com/in/zsolt98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <IconLinkedin className="me-1" size={25} stroke="#e5e7eb" />
          </span>
          zsolt98
        </a>
        <a
          className="resume-link-fill fs-6 text-light fw-normal text-decoration-none mb-0"
          href="https://zsn.guru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <IconUser className="me-1" size={22} stroke="none" fill="#e5e7eb" />
          </span>
          www.zsn.guru
        </a>
      </div>
      <p className="text-light mb-0">
        Erős problémamegoldó képességgel és az intuitív dizájn iránt
        szenvedéllyel rendelkező webfejlesztő. Reszponzív és felhasználóközpontú
        frontend webalkalmazások készítésére specializálódott, JavaScript és
        ReactJS szakértelemmel.
      </p>
      <div className="my-4 resume-divider border-top border-info" />
      <h3 className="fs-2 text-info mb-4">Munkahelyi tapasztalat</h3>
      <h4 className="fs-3 text-info fw-normal mb-2 d-flex justify-content-between align-items-center">
        Munkatörténet
        <span className="d-none d-lg-inline fs-6 fw-light">
          July 2019 - Jelen
        </span>
      </h4>
      <h5 className="fs-4 text-info fst-italic fw-light mb-2">
        Az Egyesült Királyságban és Szerbiában
      </h5>
      <ul className="text-light fs-6 fw-normal mb-0">
        <li className="">
          Több Shopify e-kereskedelmi weboldal kezelése és karbantartása,
          beleértve a tartalomfrissítéseket, a téma testreszabását és kód
          implementációt.
        </li>
        <li className="">
          Meta Ads és Google Ads kampányok optimalizálása, a konverziós arány és
          a forgalom növelése érdekében.
        </li>
        <li className="">
          Ügyféltámogatás nyújtása bizonyítottan magas elégedettségi mutatókkal
          és sikeres felülértékesítési kezdeményezésekkel.
        </li>
      </ul>
      <h3 className="fs-2 text-info my-4">Projektek</h3>
      <h4 className="fs-3 text-info fw-normal mb-2">Yourney</h4>
      <h5 className="fs-4 text-info fst-italic fw-light mb-2">
        https://your-ney.netlify.app/
      </h5>
      <ul className="text-light fs-6 fw-normal mb-0">
        <li className="">
          Prémium autókölcsönző platform kifejlesztése, ReactJS, JavaScript,
          Bootstrap, Sass és Zustand eszközök használatával.
        </li>
        <li className="">
          Teljes felhasználó hitelesítési folyamat kiépítése, beleértve a
          regisztrációs, bejelentkezési és jelszó-visszaállítási funkciókat.
        </li>
        <li className="">
          Széleskörű foglalási rendszer kifejlesztése járműválasztással, idő- és
          helymeghatározással.
        </li>
        <li className="">
          Felhasználói profil létrehozása ahol a profilkezelés és a foglalások
          létrehozásá/törlésé frontend CRUD műveletekkel kivitelezhető.
        </li>
      </ul>
      <h3 className="fs-2 text-info my-4">Oktatás</h3>
      <h4 className="fs-3 text-info fw-normal mb-2 d-flex justify-content-between align-items-center">
        "Ivan Sarić" Műszaki Középiskola
        <span className="d-none d-lg-inline fs-6 fw-light">
          Szabadka, Szerbia
        </span>
      </h4>
      <h5 className="fs-4 text-info fst-italic fw-light mb-2">
        Informatikai (IT) technikus
      </h5>
      <ul className="text-light fs-6 fw-normal mb-0">
        <li className="">
          Műszaki oktatás, amelynek középpontjában az informatika áll, beleértve
          a programozási nyelveket, a webfejlesztést és az adatbázis-kezelést.
        </li>
      </ul>
      <h3 className="fs-2 text-info my-4">Képességek</h3>
      <div className="table-responsive">
        <Table responsive borderless className="resume-table">
          <tbody>
            <tr>
              <td className="p-0 pe-6 fs-6 fw-normal text-light ">
                JavaScript
              </td>
              <td className="p-0 fs-6 fw-normal text-light">
                ReactJS, TypeScript
              </td>
            </tr>
            <tr>
              <td className="p-0 pe-6 fs-6 fw-normal text-light ">Web</td>
              <td className="p-0 fs-6 fw-normal text-light">
                HTML, CSS, Sass, Bootstrap, PostgreSQL, Git, Shopify, Citrix
              </td>
            </tr>
            <tr>
              <td className="p-0 pe-6 fs-6 fw-normal text-light ">Dizájn</td>
              <td className="p-0 fs-6 fw-normal text-light">Figma, Canva</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
