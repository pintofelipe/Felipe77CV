import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa6";
import imgPrincipal from "../assets/fonts/img-principal.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E2E] text-[#E2E8F0] pt-10 pb-6">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-[#2D2F45] pb-8">

        

        {/* logo / img*/}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={imgPrincipal}
            alt="Fondo del autor"
            className=" w-77 h-77 rounded-full object-cover border-4 border-[#3B82F6 shadow-lg]"
          />
        </div>
        {/* Contacto* */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-[#3B82F6]">
            Contacto
          </h4>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#9333EA]" />
              <p>(+57) 316-444-6204</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#9333EA]" />
              <p>pintodeveloper@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#9333EA]" />
              <p>afpintou@ufpso.edu.co</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#9333EA]" />
              <p>andreyfelipepintouribe77@gmail.com</p>
            </div>
          </div>
        </div>
        {/* Enlaces* */}

        <div>
          <h4 className="text-2xl font-semibold mb-4 text-[#3B82F6]">
            Enlaces
          </h4>
          <a
            href="https://api.whatsapp.com/send?phone=3164446204&text=%C2%A1Hablas%20con%20Felipe77%21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#9333EA] transition"
          >
            <FaWhatsapp /> Contacto WhatsApp
          </a>
        </div>

        {/*  Redes Sociales */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#3B82F6]">
            Redes Sociales
          </h4>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2563EB] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://web.facebook.com/andreyfelipe.pintouribe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3B82F6] transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/felipep_77/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#DB2777] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/PINTOFELIPE77"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.youtube.com/channel/UCfGXFR99-59mXv0I_htKmaA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://github.com/pintofelipe/programming.git"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#9333EA] transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

       
      </div>

       <div className="text-center text-sm text-[#E2E8F0]/70 mt-6">
          © {new Date().getFullYear()} Andrey Felipe Pinto Uribe - Todos los
          derechos reservados.
        </div>
    </footer>
  );
};


export default Footer;
