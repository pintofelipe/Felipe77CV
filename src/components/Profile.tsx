import imgPrincipal from "../assets/fonts/img-principal.jpg";

const Profile = () => {
  return (
    <>
      <header className="bg-[#1E1E2E] text-white">
        {/* Barra de navegación */}
        <nav className="flex justify-between items-center p-5 shadow-lg bg-[#25273D]">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-[#3B82F6]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <span className="text-2xl font-semibold">Home</span>
          </div>
          <ul className="flex gap-5">
            {['Habilidades', 'Proyectos', 'Certificados', 'Inicio', 'Educación'].map((item) => (
              <li
                key={item}
                className="cursor-pointer text-lg hover:text-[#3B82F6] transition duration-300"
              >
                {item}
              </li>
            ))}
            <li className="bg-[#9333EA] px-4 py-2 rounded-lg cursor-pointer hover:bg-[#7A1EB0] transition duration-300">
              Contacto
            </li>
          </ul>
        </nav>

        {/* Sección Principal */}
        <section
          className="h-96 bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${imgPrincipal})` }}
        >
          <div className="bg-[#1E1E2E]/80 p-10 rounded-lg max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-[#E2E8F0]">ANDREY FELIPE PINTO URIBE</h1>
            <p className="mt-3 text-lg text-[#E2E8F0]/80">Ingeniería de Sistemas | Bachiller | Diplomado en Programación</p>
            <p className="mt-5 text-sm text-[#E2E8F0]/70 leading-relaxed">
              Me llamo Andrey Felipe Pinto Uribe, Tengo 20 años y me interesa la política, leyes, noticias, deportes como natación, fútbol y ajedrez. Me apasiona la tecnología y la programación, especialmente en el desarrollo web y lenguajes como JavaScript, Python, Java, C++ y Kotlin.
            </p>
            <button className="mt-5 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-2 px-5 rounded-lg transition duration-300">
              Ver Perfil
            </button>
          </div>
        </section>
      </header>
    </>
  );
};

export default Profile;
