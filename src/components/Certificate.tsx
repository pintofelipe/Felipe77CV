const Certificate = () => {
  const certificates = [
    {
      img: "src/assets/certificates/egg.jpg",
      title: "Programación desde cero",
      issuer: "egg - 2022",
      link: "src/assets/certificates/egg.jpg",
    },
    {
      img: "src/assets/certificates/analytics.jpg",
      title: "Análitica de datos",
      issuer: "DS4A-Colombia - 2022",
      link: "src/assets/certificates/analytics.jpg",
    },
    {
      img: "src/assets/certificates/sena-inventarios.jpg",
      title: "Administración de Inventarios",
      issuer: "SENA - 2022",
      link: "src/assets/certificates/sena-inventarios.jpg",
    },
    {
      img: "src/assets/certificates/sena-inventor.jpg",
      title: "App Inventor",
      issuer: "Desarrollo APP Inventor - 2022",
      link: "src/assets/certificates/sena-inventor.jpg",
    },
    {
      img: "src/assets/certificates/sena-python.jpg",
      title: "Python",
      issuer: "SENA - 2022",
      link: "src/assets/certificates/sena-python.jpg",
    },
    {
      img: "src/assets/certificates/uis-python.jpg",
      title: "Fundamentos de python",
      issuer: "UIS - 2022",
      link: "src/assets/certificates/uis-python.jpg",
    },
    {
      img: "src/assets/certificates/uis-java.jpg",
      title: "Programación en Java",
      issuer: "UIS - 2022",
      link: "src/assets/certificates/uis-java.jpg",
    },
    {
      img: "src/assets/certificates/uis-software.jpg",
      title: "Desarrollo de Software",
      issuer: "UIS - 2022",
      link: "src/assets/certificates/uis-software.jpg",
    },
    {
      img: "src/assets/certificates/uis-movil.jpg",
      title: "Desarrollo de App móvil",
      issuer: "UIS - 2022",
      link: "src/assets/certificates/uis-movil.jpg",
    },
    {
      img: "src/assets/certificates/uis-diploma.jpg",
      title: "Diplomado de Programación",
      issuer: "UIS - 2022",
      link: "src/assets/certificates/uis-diploma.jpg",
    },
    {
      img: "src/assets/certificates/desarrolloweb.jpg",
      title: "Desarrollo web",
      issuer: "Código Facilito - 2023",
      link: "src/assets/certificates/desarrolloweb.jpg",
    },
    {
      img: "src/assets/certificates/git.jpg",
      title: "Curso profesional de Git",
      issuer: "Código Facilito - 2023",
      link: "src/assets/certificates/git.jpg",
    },
    {
      img: "src/assets/certificates/github.jpg",
      title: "Curso A fondo de GitHub",
      issuer: "Código Facilito - 2023",
      link: "src/assets/certificates/git.jpg",
    },
    {
      img: "src/assets/certificates/baseDatos.jpg",
      title: "Curso Profesional de Base de datos",
      issuer: "Código Facilito - 2023",
      link: "src/assets/certificates/baseDatos.jpg",
    },
    {
      img: "src/assets/certificates/java-facilito.jpg",
      title: "Curso Profesional de Java",
      issuer: "Código Facilito - 2023",
      link: "src/assets/certificates/java-facilito.jpg",
    },
    {
      img: "src/assets/certificates/introProgra.jpg",
      title: "Introducción a la Programación",
      issuer: "Fundación Telefonica Movistar - 2023",
      link: "src/assets/certificates/introProgra.jpg",
    },
    {
      img: "src/assets/certificates/class-mirror1.jpg",
      title: "Clase espejo Interistitucional",
      issuer: "Universidades - 2023",
      link: "src/assets/certificates/class-mirror1.jpg",
    },
    {
      img: "src/assets/certificates/class-mirror2.jpg",
      title: "Clase espejo Interistitucional",
      issuer: "Universidades - 2023",
      link: "src/assets/certificates/class-mirror2.jpg",
    },
    {
      img: "src/assets/certificates/java-script-facilito.jpg",
      title: "Curso Profesional de JavaScript",
      issuer: "Código Facilito - 2023",
      link: "src/assets/certificates/java-script-facilito.jpg",
    },
    {
      img: "src/assets/certificates/office-basic.jpg",
      title: "Office Básico",
      issuer: "Fundación Telefonica Movistar - 2023",
      link: "src/assets/certificates/office-basic.jpg",
    },
    {
      img: "src/assets/certificates/java-script-dom.jpg",
      title: "JavaScript y el DOM",
      issuer: "Código Facilito - 2023",
      link: "src/assets/certificates/java-script-dom.jpg",
    },
    {
      img: "src/assets/certificates/js-movistar.jpg",
      title: "Programación con JavaScript",
      issuer: "Fundación Telefonica Movistar - 2023",
      link: "src/assets/certificates/js-movistar.jpg",
    },
    {
      img: "src/assets/certificates/fun-kotlin-meta.jpg",
      title: "Fundamentos de Kotlin",
      issuer: "Meta - 2024",
      link: "src/assets/certificates/fun-kotlin-meta.jpg",
    },
    {
      img: "src/assets/certificates/resolver-problem.jpg",
      title: "Cómo resolver problemas y tomar decisiones",
      issuer: "Universidad de California - 2024",
      link: "src/assets/certificates/resolver-problem.jpg",
    },
    {
      img: "src/assets/certificates/diploma-jetpack-android.jpg",
      title: "Jetpack Compose En Android",
      issuer: "Platzi - 2024",
      link: "src/assets/certificates/diploma-jetpack-android.jpg",
    },
    {
      img: "src/assets/certificates/bootcamp-programing.jpg",
      title: "Bootcamp de programación",
      issuer: "Talento Tech - 2024",
      link: "src/assets/certificates/bootcamp-programing.jpg",
    },
    {
      img: "src/assets/certificates/diploma-dbsql.jpg",
      title: "Base de datos con SQL",
      issuer: "Platzi - 2025",
      link: "src/assets/certificates/diploma-dbsql.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-center text-4xl font-bold mb-8 text-white bg-gradient-to-r from-[#4C6B9D] to-[#2C3A58] py-3 rounded-lg shadow-xl">
        CERTIFICADOS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-gray-200 p-5 rounded-lg shadow-lg">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-3 text-center border border-gray-300 transition transform hover:scale-105 hover:bg-[#2C3A58] hover:bg-opacity-90 hover:text-white"
          >
            <img
              src={cert.img}
              alt={`Certificado de ${cert.title}`}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="font-semibold mt-2 text-gray-900 hover:text-white">{cert.title}</h3>
            <h4 className="text-sm text-gray-600 hover:text-white">{cert.issuer}</h4>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline mt-2 inline-block"
            >
              Ver certificado
            </a>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Certificate;
