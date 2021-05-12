import Nav from "../components/nav";
import { Title } from "../components/title";
import { Layout } from "../components/layout"

const Materiaal = () => (
  <Layout title="Materiaal">
    <div className="relative">
      <div className="  h-full min-h-screen w-full absolute top-0" />
      <Nav />

      <div className="relative pb-16 px-8 mx-auto md:max-w-screen-md">
        <Title color="#013f5d" title="Materiaal / video's" />

        <div className="mb-8 ">
          <p className="text-lg border-b-2 border-gray-200 pb-2 text-fontColor pb-4 mb-4">
            Via onderstaande links kun je kijken tussen de werkvormen en
            materialen die ik gemaakt heb voor mijn leerlingen. Gesorteerd op
            jaarlaag vind je werkvormen en presentaties voor economie lessen en in
            de map algemeen materialen die ook voor andere vakken toepasbaar zijn.
            Voel je vrij deze te downloaden, te veranderen en zelf te gebruiken.
            De materialen zijn zo goed als van mijn eigen hand, maar toch zal ik
            via via inspiratie hebben opgedaan van collega’s en andere bronnen.
            Mocht je onverhoopt eigenaar zijn van bepaalde inhoud; neem dan
            contact op.
        </p>

          <ul>
            <li className="mb-2">
              <a
                className="border-solid border-b border-color1 text-lg text-fontColor"
                href="https://drive.google.com/drive/folders/1n3RtRa0YGsJpYJ9-XhGrjL3uZmIQuSUZ"
              >
                3 havo / 3 vwo
            </a>
            </li>
            <li className="mb-2">
              <a
                className="border-solid border-b border-color1 text-lg text-fontColor"
                href="https://drive.google.com/drive/folders/13ZlmFZRhHLx93_Jh-jbqLj___cCc34bG"
              >
                4 havo / 4 vwo
            </a>
            </li>
            <li className="mb-2">
              <a
                className="border-solid border-b border-color1 text-lg text-fontColor"
                href="https://drive.google.com/drive/folders/1_QW9AcIrPOQVkJHelTbpd1w0AGXcgYe0"
              >
                5 havo / 5 vwo
            </a>
            </li>
            <li className="mb-2">
              <a
                className="border-solid border-b border-color1 text-lg text-fontColor"
                href="https://drive.google.com/drive/folders/121vv_HEM97XdHnWvPg6yULTxAG4bhBwD"
              >
                6 vwo
            </a>
            </li>
            <li className="mb-2">
              <a
                className="border-solid border-b border-color1 text-lg text-fontColor"
                href="https://drive.google.com/drive/folders/1YWKZQVZBsbe-i3dJDxP7rnBGNcHOJmcR"
              >
                Algemene werkvormen
            </a>
            </li>
          </ul>
        </div>

        <h2 className="relative text-2xl md:text-3xl text-fontColor mb-2">
          Hier zijn een aantal video's van mijn online lessen.
      </h2>

        <a href="https://www.youtube.com/channel/UC3Rvdgj_8AfmrqWfZ9Lwh8w" className=" mb-2">
          <span className="border-solid border-b border-color1 text-lg text-fontColor" >
            Als je meer wil zien klik op deze link.
        </span>
        </a>

        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto ">
          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/c36ziQzmXrk"
              frameBorder="0"
              //allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="shadow-offset"
            />
          </div>




          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/RkmQ8mutLdc"
              frameBorder="0"
              //allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="shadow-offset"
            />
          </div>




          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/xmRgs-hgkQs"
              frameBorder="0"
              //  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="shadow-offset"
            />
          </div>


        </div>
      </div>
    </div>
  </Layout>
);

export default Materiaal;
