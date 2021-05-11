export const BackgroundImage = () => {
  return (
    <div className="fixed w-full h-full top-0 right-0 z-0">
      <div className="absolute object-contain opacity-50 h-full w-full bg-color3 z-10" />
      <div className="relative w-full h-full">
        <img
          className="absolute object-cover h-full w-full"
          alt="Dennis stassen voor de klas"
          src={
            "https://res.cloudinary.com/dta9vptzh/image/upload/c_scale,w_1666/v1602325993/dennisStassen/dennis_voor_de_klas.jpg"
          }
        />
        <img
          className="absolute object-cover h-full w-full"
          alt="Dennis stassen voor de klas"
          src={
            "https://res.cloudinary.com/dta9vptzh/image/upload/c_scale,w_1666/v1602325993/dennisStassen/dennis_voor_de_klas.jpg"
          }
        />
        <img
          className="absolute object-cover h-full w-full"
          alt="Dennis stassen voor de klas"
          src={
            "https://res.cloudinary.com/dta9vptzh/image/upload/c_scale,w_1666/v1602325993/dennisStassen/dennis_voor_de_klas.jpg"
          }
        />
      </div>
    </div>
  );
};
