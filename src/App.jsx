import { Home } from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/NavbarComponent";
import Footer from "./Components/Footer";
import { useState } from "react";
import { moduleContext } from "./Context/ModuleContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseDetail from "./Components/CourseDetail";

const filieres = [
  {
    id: 1,
    nomFiliere: "Génie Informatique",
    url: "https://cdn-dignn.nitrocdn.com/ODVWLhfvViSlRnPJqWNObxjvuEXjQbGY/assets/images/optimized/rev-fb3b110/www.weodeo.com/wp-content/uploads/2021/12/reseau-informatique-scaled-1-2048x1366.jpeg",
    modules: [
      {
        id: 1,
        name: "UML",
        url: "https://cdn-dignn.nitrocdn.com/ODVWLhfvViSlRnPJqWNObxjvuEXjQbGY/assets/images/optimized/rev-fb3b110/www.weodeo.com/wp-content/uploads/2021/12/reseau-informatique-scaled-1-2048x1366.jpeg",
        courses: [
          {
            name: "Introduction à l'informatique - Cours complet",
            type: "pdf",
            url: "https://lipn.univ-paris13.fr/~dubacq/pdf/m1101/sys.pdf",
          },
          {
            name: "Les BASES de l'Informatique",
            type: "video",
            url: "https://www.youtube.com/watch?v=q-BoKqm_ZKU",
          },
        ],
        td: [
          {
            name: "Cours 1 : Introduction à l'informatique",
            type: "pdf",
            url: "https://www.univ-chlef.dz/fsnv/wp-content/uploads/cours_outils-informatiques-L2-Ecologie-et-L2-hydrobiologie-_-Mlle-Mejroud.pdf",
          },
        ],
        tp: [
          {
            name: "Cours 1 : Initiation à l'informatique",
            type: "pdf",
            url: "https://www.univ-chlef.dz/fsnv/wp-content/uploads/cours-informatique-L3-Sol-et-Eau_compressed-1.pdf",
          },
        ],
        corrections: [
          {
            name: "Guide de Formation pour Informatique de base",
            type: "pdf",
            url: "https://bv.cdeacf.ca/RA_PDF/144843.pdf",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    nomFiliere: "Ingénierie des Données",
    url: "https://www.weodeo.com/wp-content/uploads/2024/06/quest-ce-quun-reseau-informatique-dentreprise.webp  ",
    modules: [
      {
        id: 2,
        name: "Arch Client/Server",
        url: "https://www.weodeo.com/wp-content/uploads/2024/06/quest-ce-quun-reseau-informatique-dentreprise.webp  ",

        courses: [
          {
            name: "Apprendre Python - Cours complet",
            type: "pdf",
            url: "https://perso.limsi.fr/pointal/_media/python:courspython.pdf",
          },
          {
            name: "Tutoriel Python pour débutants",
            type: "video",
            url: "https://www.youtube.com/watch?v=HGOBQPFzWKo",
          },
        ],
        td: [
          {
            name: "Exercices Python - Les bases",
            type: "pdf",
            url: "https://www.fil.univ-lille1.fr/~L1S2API/Cours/TDs/TD1.pdf",
          },
        ],
        tp: [
          {
            name: "TP Python - Projet de programmation",
            type: "pdf",
            url: "https://deptinfo-ensip.univ-poitiers.fr/ENS/pedagogie/ressources/Python/TPs/TP1.pdf",
          },
        ],
        corrections: [
          {
            name: "Correction des exercices Python",
            type: "pdf",
            url: "https://www.fil.univ-lille1.fr/~L1S2API/Cours/Corrections/TD1_corrige.pdf",
          },
        ],
      },
    ],
  },
];

function App() {
  const [filiere, setFiliere] = useState(filieres);

  return (
    <moduleContext.Provider value={{ filiere, setFiliere }}>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/home/coursedetail/:filiereId"
            element={<CourseDetail />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </moduleContext.Provider>
  );
}

export default App;
