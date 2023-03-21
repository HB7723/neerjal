import React from "react";

import "./AboutUs.css";

import background from "../../assets/aboutus__background.svg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <div className="about">
          <img
            src={background}
            alt="Background"
            className="about__background"
          />
          {/* <div className="about__content">
            <h1>What is neerjal</h1>
            Lörem ipsum supraplan rovyvyra då blattesvenska. Plas
            heterocentrism, metaskop, far. Laheten autore dening, prektig. Ore
            sosade, dotörussa och jaligen. Tårtgate tebyskapet. Brexit agt.
            Megastat don om naturvin. Tasyrtad exoren ifall teratt. Kålena
            dekament i gubbploga. Nibelt plaskap nivyd pis. Nytahet dik som osm.
            Osoheten ost termofili tren. Ler exosat pigon att nägylig. Disa
            husa. Dipal pudisk, nerat plat. Dor lobässade nysade och eurosa.
          </div> */}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
