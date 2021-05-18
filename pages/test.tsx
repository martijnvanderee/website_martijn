
import Nav from "../components/nav";

import { Title } from "../components/title";
import { Layout } from "../components/layout"
import { PostItem } from "../components/postItem"

import { BsPencil } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { IconContext } from "react-icons";



const Test = () => {
  const image1 = "img/dennis1.png"
  return (
    <Layout title="over Dennis Stassen">

      {/*

      <div className="relative w-full h-48">
        <div className="absolute z-10 bottom-0 m-4">
          <h2 className="text-white">Mensen met hoog EQ beter in het herkennen van fake news?</h2>
        </div>
        <img
          src={image1}
          alt="title van artikel"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-4">

        <div className="flex mb-2">
          <div className="flex mr-4">

            <IconContext.Provider value={{ color: "#707070", size: "1.5em", }}>
              <div>
                <BsPencil className="mr-1" />
              </div>
            </IconContext.Provider>

            <span className="text text-grey m-auto">Monique Siemsen</span>
          </div>
          <div className="flex">

            <IconContext.Provider value={{ color: "#707070", size: "1.5em", }}>
              <div>
                <BiTimeFive className="mr-1" />
              </div>
            </IconContext.Provider>




            <time className="text text-grey m-auto">18-03-2021</time>
          </div>
        </div>


        <ul className="flex mb-6">
          <li className="text-purple font-bold p-2 border-2 border-purple rounded-md mr-4">Science</li>
          <li className="text-purple font-bold p-2 border-2 border-purple rounded-md mr-4">Health</li>
          <li className="text-purple font-bold p-2 border-2 border-purple rounded-md mr-4">Onderwijs</li>
        </ul>


        <div className="mb-12 text-xl"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Why do we use it?

        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

        Where does it come from?

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in</p></div>


        <div>
          <div className="mb-10">
            <span className="p-4 text-white bg-yellow">lees ook</span>
          </div>

          <div className="flex flex-wrap overflow-hidden my-4">
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
          </div>
        </div>


      </div>
 */}


    </Layout>
  );
};

export default Test;
