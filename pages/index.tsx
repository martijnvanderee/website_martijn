import React, { FunctionComponent } from 'react'

//components
import { Layout } from "../components/layout"
import { Header } from '../components/header';
//content
import {  contentSellingPoint, contentPrijs, contentAbout, contentUniqueSellingPoints } from "../content"

type HomeProps = {
}

const Home: FunctionComponent<HomeProps> = ({ }) => {
  return (
    <Layout title="Web Design Ampolo">
      <main className="font-mono">
        <Header />
        <SellingPointSection />
        <PrijsSection />
        <AboutSection />
        <UniqueSellingPointSection />

      </main>

      <Footer />
    </Layout>
  )
}

type ArticleProps = {
}

const SellingPointSection: FunctionComponent<ArticleProps> = ({ }) => {
  return (
    <div className="bg-backgroundBlack p-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 text-white">{contentSellingPoint.title}</h2>
        <div className="mb-6 md:mb-12" >
          <img src='/images/tags.svg' alt="" className="mx-auto" />
        </div>
        <div>
          <p className="mx-auto max-w-2xl md:text-xl mb-6 md:mb-12 text-lg text-white">{contentSellingPoint.subTitle}<a href="" className="inline text-blue">{contentSellingPoint.link}</a></p>
        </div>
      </div>
    </div>
  )
}

const PrijsSection: FunctionComponent = ({ }) => {
  return (
    <div className="m-8">
      <img src='/images/moneyPerson.svg' alt="" className="mx-auto mb-8" />
      <div className="text-center">
        <h3 className="mx-auto mb-6 md:mb-12 max-w-lg text-3xl md:text-4xl font-bold text-black"><strong className="text-green">€0</strong> Vooraf, <strong className="text-green">€150</strong> Per Maand, Altijd opzegbaar</h3>
        <p className="mx-auto max-w-2xl md:text-xl mb-6 md:mb-12 text-lg text-grey">{contentPrijs.subTitle1}</p>
        <p className="mx-auto max-w-2xl md:text-xl mb-6 md:mb-12 text-lg text-grey">
          <span className="underline underline-thickness-thin underline-green ">
            Jij Blijft eigenaar van je domein, content, ... en ...
          </span>
          Op elk moment kan je opzeggen zonder extra kosten.
        </p>

      </div>
    </div>
  )
}


const AboutSection: FunctionComponent<ArticleProps> = ({ }) => {
  return (
    <div className="relative z-10 bg-backgroundBlack p-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-6 text-white">{contentAbout.title}</h2>
        <div className="md:mb-6" >
          <img src='/images/tags1.svg' alt="" className="mx-auto" />
        </div>
        <div>
          <img className="mx-auto my-4" src="./images/me1.svg" alt="" />
          <p className="mx-auto max-w-2xl md:text-xl mb-6 md:mb-12 text-lg text-white">
            {contentAbout.subtitle} {" "}
            <span className="mx-auto max-w-2xl md:text-xl mb-6 md:mb-12 text-lg text-blue">Kom meer over mij te weten!</span>
          </p>
        </div>
      </div>
    </div>
  )
}

const UniqueSellingPointSection: FunctionComponent = ({ }) => {
  return (
    <div className="relative p-8">

      <div className="m-8">
        <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 md:scale-75 scale-100" src="./images/checkmarkBackground.svg" alt="" />
        <div className="relative bg-white z-10 font-mono shadow-lg max-w-xl mx-auto p-8  rounded-xl">
          <h2 className="my-8 font-mono text-3xl md:text-3xl font-bold text-black"> <span className="text-blue">Wat bieden</span> wij jou</h2>
          <div >
            <div className="mb-6 flex">
              <img src="./images/checkmark.svg" alt="" />
              <p className="ml-2 my-auto text-lg text-grey">{contentUniqueSellingPoints.point1}</p>
            </div>

            <div className="mb-6 flex">
              <img src="./images/checkmark.svg" alt="" />
              <p className="ml-2 my-auto text-lg text-grey">{contentUniqueSellingPoints.point2}</p>
            </div>

            <div className="mb-6 flex">
              <img src="./images/checkmark.svg" alt="" />
              <p className="ml-2 my-auto text-lg text-grey">{contentUniqueSellingPoints.point3}</p>
            </div>


            <div className="mb-6 flex">
              <img src="./images/checkmark.svg" alt="" />
              <p className="ml-2 my-auto text-lg text-grey">{contentUniqueSellingPoints.point4}</p>
            </div>

            <div className="mb-6 flex">
              <img src="./images/checkmark.svg" alt="" />
              <p className="ml-2 my-auto text-lg text-grey">{contentUniqueSellingPoints.point5}</p>
            </div>

            <div className="flex justify-end  mb-6">
              <button className="px-4 py-2 mb-6 border-2 border-blue text-xl text-blue rounded shadow-headerButtonBlue hover:shadow-headerButtonHoverBlue transition ease-in">{contentUniqueSellingPoints.button}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Portfolio: FunctionComponent = ({ }) => {
  return (
    <div className="relative">
      <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 md:scale-75 scale-100" src="./images/checkmarkBackground.svg" alt="" />
      <div className="m-8">
        <div className="relative bg-white z-10 font-mono shadow-lg max-w-2xl mx-auto p-8 rounded-xl">
          <h2 className="my-8 font-mono text-3xl md:text-3xl font-bold text-black"> <span className="text-blue">Wat bieden</span> wij jou</h2>
          <div >
            <div className="mb-6 flex">
              <img src="./images/checkmark.svg" alt="" />
              <p className="ml-2 my-auto text-lg text-grey">uniek design/geen wordpress</p>
            </div>

            <div className="mb-6 flex">
              <img src="./images/checkmark.svg" alt="" />
              <p className="ml-2 my-auto text-lg text-grey">fully responsive</p>
            </div>

            <div className="mb-6 flex">
              <img src="./images/checkmark.svg" alt="" />
              <p className="ml-2 my-auto text-lg text-grey">geoptimaliseerd snelheid</p>
            </div>


            <div className="mb-6 flex">
              <img src="./images/checkmark.svg" alt="" />
              <p className="ml-2 my-auto text-lg text-grey">goede seo</p>
            </div>

            <div className="mb-6 flex">
              <img src="./images/checkmark.svg" alt="" />
              <p className="ml-2 my-auto text-lg text-grey">uniek design/geen wordpress</p>
            </div>

            <div className="flex justify-end  mb-6">
              <button className="px-4 py-2 mb-6 border-2 border-blue text-xl text-blue rounded shadow-headerButtonBlue hover:shadow-headerButtonHoverBlue transition ease-in">Lees Meer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Footer: FunctionComponent = ({ }) => {
  return (
    <div className="relative z-10  font-mono bg-backgroundBlack p-8 ">
      <div className="max-w-6xl mx-auto grid grid-rows-2 md:grid-rows-2 md:grid-cols-5">

        <div className="md:col-span-5">
          <div className="text-3xl md:text-3xl font-bold text-white mb-4">Ampolo Web Design</div>
          <p className="text-lg md:text-lg text-lightGrey">Premier development met alle gebruiksgemak voor iedereen</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3">
          <div className="mb-4 md:mr-4">
            <div className="text-xl md:text-2xl font-bold text-white mb-4" >Navigatie</div>
            <div className="text-lg md:text-lg text-lightGrey mb-2">Home</div>
            <div className="text-lg md:text-lg text-lightGrey mb-2">Contact</div>
          </div>

          <div className=" mb-4 md:mr-4">
            <div className="text-xl md:text-2xl font-bold text-white mb-4" >Services</div>
            <div className="text-lg  md:text-lg text-lightGrey mb-2">Web design</div>
            <div className="text-lg  md:text-lg text-lightGrey mb-2 ">Web Maintenance</div>
          </div>



          <div className=" mb-4 md:mr-4">
            <div className="text-xl md:text-2xl font-bold text-white mb-4" >Contact</div>
            <div className="text-lg  md:text-xl text-lightGrey mb-2">mrtjnvanderee@gmail.com</div>
            <div className="text-lg  md:text-xl text-lightGrey mb-2"></div>
          </div>
        </div>

      </div>

      <div className="border border-grey my-4"></div>
      <div className="text-center text-xs md:text-xl text-grey">Copyright © 2021 | Ampolo Web Design | All Rights Reserved!</div>
    </div>
  )
}


// const Card: FunctionComponent = ({ }) => {
//   return (
//     <div className="">
//       <div>

//         <div className="mb-6 md:mb-12" ><img src='/images/tags.svg' alt="" className="mx-auto" /></div>
//         <h4 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 text-black">{contentHelper.title}</h4>
//         <p className="mx-auto max-w-2xl md:text-xl mb-6 md:mb-12 text-lg text-grey">{contentHelper.subTitle}</p>

//       </div>
//     </div>
//   )
// }


export default Home;