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
          Subotica, Srbija
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
        Veb developer sa jakim sposobnostima rešavanja problema i strašću prema
        intuitivnom dizajnu. Specijalizovan za frontend razvoj sa stručnostima u
        JavaScript-u i ReactJS-u, kreirajući responzivne i korisnicima
        orijentisane web aplikacije.
      </p>
      <div className="my-4 resume-divider border-top border-info" />
      <h3 className="fs-2 text-info mb-4">Profesionalno iskustvo</h3>
      <h4 className="fs-3 text-info fw-normal mb-2 d-flex justify-content-between align-items-center">
        Radna istorija
        <span className="d-none d-lg-inline fs-6 fw-light">
          Jul 2019 - Trenutno
        </span>
      </h4>
      <h5 className="fs-4 text-info fst-italic fw-light mb-2">
        U Ujedinjenom Kraljevstvu i Srbiji
      </h5>
      <ul className="text-light fs-6 fw-normal mb-0">
        <li className="">
          Upravljanje i održavanje više Shopify e-commerce veb sajtova,
          uključujući ažuriranje sadržaja, prilagođavanje tema i implementaciju
          koda.
        </li>
        <li className="">
          Optimizacija Meta Ads i Google Ads kampanja, poboljšanje konverzija i
          saobraćaja na sajtu.
        </li>
        <li className="">
          Pružao korisničku podršku sa dokazanim rezultatima visokih ocena
          zadovoljstva i uspešnih inicijativaza dodatnu prodaju.
        </li>
      </ul>
      <h3 className="fs-2 text-info my-4">Projekti</h3>
      <h4 className="fs-3 text-info fw-normal mb-2">Yourney</h4>
      <h5 className="fs-4 text-info fst-italic fw-light mb-2">
        https://your-ney.netlify.app/
      </h5>
      <ul className="text-light fs-6 fw-normal mb-0">
        <li className="">
          Razvio platformu za iznajmljivanje premium automobila koristeći
          ReactJS, JavaScript, Bootstrap i Sass, uz Zustand za upravljanje
          stanjem.
        </li>
        <li className="">
          Implementirao kompletan tok autentifikacije korisnika, uključujući
          registraciju, prijavu i funkcionalnost za resetovanje lozinke.
        </li>
        <li className="">
          Izgradio sveobuhvatan sistem za rezervaciju sa izborom vozila,
          rasporedom vremena i lokacije.
        </li>
        <li className="">
          Kreirao sistem korisničkog profila sa frontend CRUD operacijama za
          upravljanje profilom i kreiranje/brisanje rezervacija.
        </li>
      </ul>
      <h3 className="fs-2 text-info my-4">Obrazovanje</h3>
      <h4 className="fs-3 text-info fw-normal mb-2 d-flex justify-content-between align-items-center">
        Tehnička srednja škola "Ivan Sarić"
        <span className="d-none d-lg-inline fs-6 fw-light">
          Subotica, Srbija
        </span>
      </h4>
      <h5 className="fs-4 text-info fst-italic fw-light mb-2">
        Elektrotehničar informacionih tehnologija (IT)
      </h5>
      <ul className="text-light fs-6 fw-normal mb-0">
        <li className="">
          Tehničko obrazovanje sa fokusom na računarske nauke, uključujući
          programske jezike, razvoj veba i upravljanje bazama podataka.
        </li>
      </ul>
      <h3 className="fs-2 text-info my-4">Veštine</h3>
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
              <td className="p-0 pe-6 fs-6 fw-normal text-light ">Veb</td>
              <td className="p-0 fs-6 fw-normal text-light">
                HTML, CSS, Sass, Bootstrap, PostgreSQL, Git, Shopify, Citrix
              </td>
            </tr>
            <tr>
              <td className="p-0 pe-6 fs-6 fw-normal text-light ">Dizajn</td>
              <td className="p-0 fs-6 fw-normal text-light">Figma, Canva</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
