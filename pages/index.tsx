import React, { FunctionComponent } from 'react'
//components
import { Layout } from "../components/layout"
import { Atoms } from '../components/atom';

type HomeProps = {
}




const content = [
  { title: "ideataion", text: "A great web application is not just a piece of functioning code. It is also technical documentation and user tutorials, and a reliable support team behind it, which is able to resolve any technical or user experience issues. We provide technical and customer support for our products and include this service for our customers." },
  { title: "ideataion11", text: "A great web application is not just a piece of functioning code. It is also technical documentation and user tutorials, and a reliable support team behind it, which is able to resolve any technical or user experience issues. We provide technical and customer support for our products and include this service for our customers." },
  { title: "ideataion2", text: "A great web application is not just a piece of functioning code. It is also technical documentation and user tutorials, and a reliable support team behind it, which is able to resolve any technical or user experience issues. We provide technical and customer support for our products and include this service for our customers." },
  { title: "ideataion3", text: "A great web application is not just a piece of functioning code. It is also technical documentation and user tutorials, and a reliable support team behind it, which is able to resolve any technical or user experience issues. We provide technical and customer support for our products and include this service for our customers." }
]



const Home: FunctionComponent<HomeProps> = ({ }) => {
  return (
    <Layout title="Sciencegeek">
      <main>
        <Atoms content={content} />
      </main>
    </Layout>
  )
}



export default Home;