import React, { FunctionComponent } from 'react'
import Link from "next/link";

//components
import { Layout } from "../components/layout"




export default function About() {
  return <Layout title="Er ging iets mis">
    <main>

      <div className="p-4 text-black mb-20 mt-8">
        <h1 className="text-3xl mb-8 font-bold">Over sciencegeek</h1>
        <p className="text-xl mb-4">Iedere dag wil Cognovi de wereld beter begrijpen en je de beste, leukste en interessantste wetenschappelijke nieuwsfeiten brengen. Bij Cognovi vinden we wetenschap zo belangrijk dat we doelbewust gekozen hebben voor een gratis site, zonder abonnementen of dure hard copy glossy uitgave. Kennis moet vrij toegankelijk zijn voor iedereen.</p>

        <p className="text-xl mb-4">We zijn een 100% onafhankelijk mediabedrijf en niet gerelateerd aan enige filosofische,
        religieuze of politieke stroming. We baseren onze artikelen op wetenschappelijke
        bevindingen van gerenommeerde universiteiten en andere onderzoeksinstanties. Zo blijft
ons nieuws verifieerbaar en betrouwbaar.</p>

        <p className="text-xl mb-4">Heb je ook wetenschappelijk nieuws dat je graag wilt delen of ben je net gepromoveerd?
        Dan horen we heel graag van je. Email ons een persbericht, contactgegevens en
beeldmateriaal en we nemen binnen 24 uur contact met je op.</p>

        <p className="text-xl mb-4">Emailadres: redactie@cognovi.nl</p>

        <p className="text-xl mb-4">Heb je andere vragen aan onze redactie of zou je graag een artikel zien verschijnen over
        een bepaald onderwerp? Ook dan ben je van harte uitgenodigd om je idee te delen met
onze redactie.</p >


        <p className="text-xl mb-4">We wensen je een interessante en leuke dag toe!</p>

        <p className="text-xl mb-4">Monique Siemsen</p>

        <p className="text-xl mb-4">Hoofdredacteur Cognovi</p>
        <p className="text-xl">Cognovi is een uitgave van ICS Media, gevestigd te Duiven, Van Goghstraat 4, 6921 NJ</p>

      </div>
    </main>
  </Layout>
}