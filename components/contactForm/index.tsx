
export const ContactForm = () => {
  return (

    <div className="relative bg-white z-10 font-mono shadow-lg max-w-2xl mx-auto p-8 rounded-xl">
      <h2 className="my-8 font-mono text-2xl md:text-3xl font-bold text-black"> <span className="text-green">Waarmee</span> kan ik je helpen?</h2>
      <form name="contact" action="/success" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div className="mb-6">

          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="naam" />
          <input className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight text-xl  focus:outline-none focus:shadow-outline" id="naam" type="text" placeholder="Naam" name="naam" />
        </div>

        <div className="mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="achternaam" />
          <input className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight text-xl focus:outline-none focus:shadow-outline" id="naam" type="text" placeholder="Achternaam" name="achternaam" />
        </div>

        <div className="mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Telefoonnummer" />
          <input className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight text-xl  focus:outline-none focus:shadow-outline" id="naam" type="text" placeholder="Telefoonnummer" name="Telefoonnummer" />
        </div>

        <div className="mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email" />
          <input className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight text-xl focus:outline-none focus:shadow-outline" id="naam" type="text" placeholder="E-mailadres" name="email" />
        </div>

        <div className="mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vraag" />
          <textarea className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline text-xl" rows={6} placeholder="Waarmee kan ik je helpen?" name="vraag"></textarea>
        </div>

        <div className="flex justify-end  mb-6">
          <button className="px-4 py-2 mb-6 border-2 border-green text-xl text-green rounded shadow-headerButton hover:shadow-headerButtonHover transition ease-in" type="submit">Verstuur</button>
        </div>

      </form>

    </div>
  );
};
