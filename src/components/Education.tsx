const Education = () => {
    return (
        <div className="max-w-6xl mx-auto mt-10">
            <h1 className="text-center text-3xl font-semibold mb-5">EDUCACIÓN</h1>
            <div className="bg-amber-700 p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-blue-500 h-40 flex items-center justify-center text-white font-bold rounded-lg shadow-lg">
                    Ingeniero de Sistemas
                </div>
                <div className="bg-blue-500 h-40 flex items-center justify-center text-white font-bold rounded-lg shadow-lg">
                    Bachiller
                </div>
                <div className="bg-blue-500 h-40 flex items-center justify-center text-white font-bold rounded-lg shadow-lg">
                    Desarrollo de Aplicaciones Móviles
                </div>
            </div>
        </div>
    );
};

export default Education;
