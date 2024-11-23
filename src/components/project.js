import React from "react";
import Footer from "../components/footer";
import pic1 from "../assets/projectPics/portfolio.png";

const projects = [
    {
      title: "Portfolio",
      description: "My personal portfolio",
      image: pic1,
      url: "geremytyt.github.io/portfolio/",
      github: "https://github.com/geremytyt/portfolio"
    },
    // {
    //   title: "DAVIDROSE",
    //   description: "CSS experiments and style showcase",
    //   image: "/path-to-davidrose-image.jpg",
    //   url: "davidrose.style",
    //   github: "https://github.com/yourusername/davidrose"
    // },
    // {
    //   title: "AIRPORTCOD",
    //   description: "Airport code visualization project",
    //   image: "/path-to-airport-image.jpg",
    //   url: "airportcod.es",
    //   github: "https://github.com/yourusername/airportcode"
    // }
];

const Project = () => {
    return(
        <div className="bg-[#151414] text-white p-6">
            <div className="max-w-6xl mx-auto mt-10">
                <div className="text-center mb-8">
                    <h1 className="text-[65px] md:text-[200px] font-bold tracking-wider">
                        PROJECT
                    </h1>
                    <div className="h-[2px] bg-white w-full max-w-7xl mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative h-[280px] bg-black/50 overflow-hidden border border-white/20 hover:border-white/40 transition-colors duration-300"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ 
                                    backgroundImage: `url(${project.image})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundColor: '#1a1a1a'
                                }}
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-white/80 mb-4">{project.description}</p>
                                <div className="flex items-center space-x-4">
                                    <a 
                                        href={`https://${project.url}`}
                                        className="text-sm hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {project.url}
                                    </a>
                                    <a 
                                        href={project.github}
                                        className="text-sm hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            <div className="h-[2px] bg-white w-full max-w-7xl mx-auto mt-10"></div>
            </div>
            <Footer />
        </div>
    );
}

export default Project;