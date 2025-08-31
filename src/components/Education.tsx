const Education = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-center text-4xl font-bold mb-8 text-white bg-gradient-to-r from-[#4C6B9D] to-[#2C3A58] py-3 rounded-lg shadow-xl">
        EDUCACIÓN
      </h1>
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg shadow-2xl">
        {[
          "Ingeniero de Sistemas",
          "Bachiller",
          "Diplomado de programación (Univerdidad Industrial de Santander)",
        ].map((title, index) => (
          <div
            key={index}
            className="text-center px-3 bg-blue-500 h-40 flex items-center justify-center text-white font-bold text-lg rounded-lg shadow-xl transition transform hover:scale-105 hover:bg-blue-400 hover:bg-opacity-80"
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}; 

export default Education;
