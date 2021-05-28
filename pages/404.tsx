import React, { FunctionComponent } from 'react'
import Link from "next/link";

//components
import { Layout } from "../components/layout"




export default function Custom404() {
  return <Layout title="Er ging iets mis">
    <main>
      <div className="mt-16 mx-8">
        <img src="/img/404.png" className="mx-auto mb-8"></img>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 md:text-3xl">Helaas, er ging iets mis! De pagina kon niet gevonden worden</h2>
          <p className="text-lg mb-4 md:text-2xl">Mogelijk bestaat de pagina niet meer of is die onder constructie</p>

          <div className="">
            <Link href="/" >
              <button className="bg-purple text-white text-xl
       font-bold py-2 px-3 rounded ml-1 self-center " >
                ga terug naar onze voorpagina
        </button>
            </Link>
          </div>

        </div>


      </div>
    </main>
  </Layout>
}