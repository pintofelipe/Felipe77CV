import imgPrincipal from "../assets/fonts/img-principal.jpg";

const Profile = () => {
  return (
    <>
      <header className="bg-stone-300 ">
        <div className="flex  justify-between h-30">
          <div className="bg-blue-500 flex px-10">
            <span className="flex text-6xl place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-15"
                color="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>

              <span className="text-3xl font-semibold text-white">Home</span>
            </span>
          </div>
          <div className="flex bg-purple-950">
            <menu className="flex">
              <ul className="flex items-center justify-end text-white">
                <li className="place-content-center p-2 rounded-2xl text-2xl mx-1 ">
                  Habilidades
                </li>
                <li className="place-content-center p-2 rounded-2xl text-2xl mx-1 ">
                  Proyectos
                </li>
                <li className="place-content-center p-2 rounded-2xl text-2xl mx-1 ">
                  Certificados
                </li>
                <li className="place-content-center p-2 rounded-2xl text-2xl mx-1 ">
                  Inicio
                </li>
                <li className="place-content-center p-2 rounded-2xl text-2xl mx-1 ">
                  Educación
                </li>
                <li className="bg-purple-600 place-content-center p-2 rounded-4xl text-2xl mx-1">
                  Contacto
                </li>
              </ul>
            </menu>
          </div>
        </div>

        <div
          className="h-177 bg-amber-400 grid grid-cols-2 max-w-6xl mx-auto"
          style={{
            backgroundImage: `url(${imgPrincipal})`,
            backgroundSize: "cover",
            backgroundPosition: "30% 30%",
          }}
        >
          <div className="text-white font-medium  mt-10 ml-10 ">
            <h1 className="text-5xl tex font-semibold mb-7">
              ANDREY FELIPE PINTO URIBE
            </h1>
            <ul>
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Ingeniería de Sistemas
              </li>

              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Bachiller
              </li>

              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Diplomado en Programación
              </li>

              <p className="text-justify mt-10">
                Me llamo Andrey Felipe Pinto Uribe, Tengo 20 años me gusta la
                Política, leyes, las Noticias el deporte, como la natación, el
                fútbol, Ajedrez y otros juegos físicos, pero lo que más me gusta
                es dar soluciones a problemas de la vida cotidiana, por medio de
                la técnología, es por esto que Estoy estudiando Ingeniería de
                Sistemas, en areas de la programación cómo es el Desarrollo web
                en front-end me gusta tambien el manejo otros lenguajes de
                programación como lo son JavaScript, Python, Java, C++ y kotlin
                me gusta aprender y trabajar en equipo buscando siempre un
                objetivo común me gusta el liderazgo.
              </p>
            </ul>

            <button className="mt-10 ml-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Ver Perfil
            </button>
          
          </div>
        </div>
      </header>
    </>
  );
}

export default Profile;
