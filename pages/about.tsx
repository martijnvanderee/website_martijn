
import Nav from "../components/nav";

import { Title } from "../components/title";
import { Layout } from "../components/layout"
const About = () => {
  return (
    <Layout title="over Dennis Stassen">
      {/* <div className="relative">

        <Nav />

        <div className="relative pb-16 px-8 mx-auto md:max-w-screen-md">
          <Title color="#013f5d" title="Over Mij" />

          <div className="">
            <div className="mr-8">
              <div className="h-64 w-48 mx-auto mb-4 ">
                <img
                  src="https://res.cloudinary.com/dta9vptzh/image/upload/c_scale,w_222/v1602326002/dennisStassen/dennisCloseup.jpg"
                  alt="foto van dennis stassen"
                  className="object-cover h-full w-full rounded "
                />
              </div>
            </div>

            <div className="border-b-2 border-gray-200">
              <p className="text-base md:text-lg mb-4 text-fontColor">
                <span className="font-black italic text-fontColor">
                  “Waar heb je je nu weer voor opgegeven?!”
              </span>{" "}
              riep mijn moeder toen ik thuiskwam van school. Ik zat in de
              kleuterklas en op de vraag wie van de leerlingen wilde optreden op
              het 25 jarig jubileum van de school had ik mijn vinger opgestoken,
              zoals wel vaker. Ik zou optreden als muzikale kat (naar de disney
              film Aristocats) en een lied uit deze film playbacken. De
              hulptroepen werden ingeschakeld. Zo kreeg ik grote katten sloffen
              te leen van mijn neef, er werd van zolder een oud keyboard gehaald
              en voor het optreden kreeg ik schmink op om de act compleet te
              maken. Op de avond van het optreden was een groot deel van de
              familie aanwezig, waaronder mijn oom die het hele gebeuren op film
              heeft weten vast te leggen.
            </p>

              <p className="text-base md:text-lg mb-4 text-fontColor">
                Ik heb me altijd op het gemak gevoeld voor grote groepen, waardoor
                ik ook in mijn studententijd vaak degene was die presentaties voor
                mijn rekening nam. Na het afronden van mijn studie Economics in
              2016 en de gecombineerde afstudeerstage bij Rabobank en APG{" "}
                <span className="font-black italic text-fontColor">
                  wist ik dat het voorlopig nog geen tijd was om een kantoorbaan
                  aan te gaan.
              </span>
              Integendeel; ik zou nog een jaar lang doorstuderen om mijn
              bevoegdheid te halen en economieles te kunnen geven aan middelbare
              scholieren.
              <span className="font-black italic text-fontColor">
                  {" "}
                Zo kon ik mijn passie voor economie combineren met mijn eigen
                podium voor 30 leerlingen.
              </span>
              </p>

              <p className="text-base md:text-lg mb-4 text-fontColor">
                In het najaar van 2016 begon mijn stage op een school in Den Bosch
                en ik kreeg al snel de ruimte om zelfstandig klassen te draaien.
                Met mijn presentatie ervaring zou ik het wel redden en dat was in
                het begin ook zo. Totdat het bij de tussentijdse beoordeling
                misging. Ik kreeg geen contact met de klas, had een matig verhaal
                en de les ging als een nachtkaars uit. Pubers zijn toch een ander
                publiek. Aandacht krijgen is niet vanzelfsprekend en ze in een
                actieve stand krijgen ook niet. Ik heb in deze periode veel gehad
                aan mijn opleiders en met name de woorden van de schoolopleider,
              die mijn afgang kon relativeren:{" "}
                <span className="font-black italic text-fontColor">
                  “Als je denkt dat je er bent, zul je altijd zien dat het
                  misgaat”.
              </span>
              </p>

              <p className="text-base md:text-lg mb-4 text-fontColor">
                Vanaf 2017 geef ik als bevoegd docent economieles op het Minkema
                college en een workshop ‘didactisch coachen’ inspireerde mij
                enorm. Ik blijf constant op zoek naar praktisch uitvoerbare
              methodes en werkvormen die{" "}
                <span className="font-black italic text-fontColor">
                  bewezen effectief
              </span>{" "}
              werken. Vanaf schooljaar 2020/2021 heb ik zitting genomen in de
              werkgroep formatief evalueren om ideeën schoolbreed te verspreiden
              en collega's te helpen.{" "}
                <span className="font-black italic text-fontColor">
                  Bedenk eens hoe inspirerend lessen kunnen zijn als good
                practises worden gedeeld en docenten steeds effectiever{" "}
                </span>
              lesgeven. Authenticiteit moet daarbij niet worden vergeten; elke
              leraar heeft een eigen stijl van lesgeven, waar bepaalde
              strategieën bij werken en andere niet. Via deze site deel ik mijn
              ideeën. Voel je vrij je eigen gereedschapskist aan te vullen en
              kies eruit wat bij jou past en voor jou werkt!
            </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl md:text-2xl text-headingColor mb-2">
                Boeken die mij geïnspireerd hebben
            </h3>

              <h4 className="text-lg font-bold text-headingColor mb-2">
                Over onderwijs:
            </h4>
              <ul className="text-lg text-fontColor">
                <li className="list-disc">
                  Klein GROOT - De overtuigingskracht van het detail. Kleine
                veranderingen met grote invloed{" "}
                  <div className="mb-2">
                    Auteurs: Steve Martin, Noah Goldstein, Robert Cialdini
                </div>
                </li>

                <li className="list-disc">
                  De lerende mens <div className="mb-2">Auteur: Jurjen van der Helden</div>
                </li>

                <li className="list-disc">
                  WIJZE LESSEN: 12 bouwstenen voor effectieve didactiek{" "}
                  <div>
                    Auteurs: Tim Surma, Prof. Dr. Paul Kirschner, Dr. Gino Camp,
                    Kristel Vanhoyweghen Prof. Dr. Daniel Muijs, Dr. Dominique
                    Sluijsmans
                </div>{" "}
                </li>
              </ul>

              <h4 className="text-lg mt-4 font-bold text-headerColor mb-2">
                Over economie/beleggen:
            </h4>
              <ul className="text-lg text-fontColor">
                <li className="list-disc">
                  De Rijkste Man van Babylon <p className="mb-2">Auteur: George Samuel Clason</p>
                </li>

                <li className="list-disc">
                  Factfulness. Ten Reasons We're Wrong About The World - And Why
                Things Are Better Than You Think <p>Auteur: Hans Rosling</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export default About;
