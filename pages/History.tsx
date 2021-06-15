import React, { FunctionComponent } from 'react'
import Link from "next/link";

//components
import { Layout } from "../components/layout"
import { PostItem } from "../components/postItem"
//functions
import { importPost1, randomPost } from "../localFunctions/importPosts";

//typescript
import { PostData } from "../typescript"

type HomeProps = {

}

const History: FunctionComponent<HomeProps> = () => {


  return (
    <Layout title="Sciencegeek">
      <main>
        test
      </main>
    </Layout>
  )
}




export default History;