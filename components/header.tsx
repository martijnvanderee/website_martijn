import Link from "next/link";

export const Header = () => (
  <div className="relative flex p-6 mt-16 rounded-lg mb-16 shadow-offsetHover">
    <div className="absolute w-full h-full inset-0 opacity-75 rounded-lg bg-color3" />
    <img
      className="relative opacity-0 hidden h-64 w-auto my-auto mr-8 rounded  md:opacity-100 md:block"
      src="https://res.cloudinary.com/dta9vptzh/image/upload/c_scale,w_222/v1602326002/dennisStassen/dennisCloseup.jpg"
      alt="foto van dennis stassen"
    />
    <div className="relative">
      <h4 className="text-white text-lg">
        Ben
        je ook benieuwd welke lessen jij kunt trekken uit de praktijk van een economiedocent?
      </h4>

      <p className="my-2 text-lg text-white">
        Hier deel ik mijn ideeën over goed lesgeven en mijn passie voor economie.
      </p>
      <p className="my-2 text-lg text-white">
        Ik ben ervan overtuigd dat veel inzichten vanuit het klaslokaal toepasbaar in alle situaties waar
        je mensen wil boeien, enthousiasmeren of overtuigen!
      </p>

      <div>
        <Link href="/about" passHref>
          <a>
            <span className="border-solid border-b border-color1 text-lg text-white">
              Lees wat ik doe{" "}
            </span>
          </a>
        </Link>

        <p className="text-white inline-block my-2 text-lg">of</p>

        <Link href="/contact" passHref>
          <a>
            <span className="border-solid border-b border-color1 text-lg text-white">
              {" "}
              neem contact met mij op!
            </span>
          </a>
        </Link>
      </div>
    </div>
  </div>
);
