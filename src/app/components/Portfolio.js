const Portfolio = () => {
    const projects = [
        {
            title: "Flight Price Tracker",
            description: "Python automation tool that tracks flight price changes and sends alerts via API.",
            tech: ["Python", "API"],
            url: "https://github.com/LuisCarlosHM/flight-price-tracker",
        },
        {
            title: "ML Prediction App",
            description: "Machine learning prediction app with Django backend, React frontend, containerized with Docker and deployed on Azure with Kubernetes.",
            tech: ["Django", "React", "Docker", "Kubernetes", "Azure"],
            url: null, // private
        },
        {
            title: "Personal Finance Tracker",
            description: "Personal finance tracking dashboard built with JavaScript and Chart.js.",
            tech: ["JavaScript", "Chart.js"],
            url: null, // private
        },
        {
            title: "Natours",
            description: "Tour booking REST API built with Node.js, Express, and MongoDB — MVC architecture.",
            tech: ["Node.js", "Express", "MongoDB"],
            url: "https://github.com/LuisCarlosHM/Natours-Node.js",
        },
        {
            title: "Weather App",
            description: "Vanilla JavaScript weather app with dynamic UI powered by a weather API.",
            tech: ["JavaScript", "HTML", "CSS"],
            url: "https://github.com/LuisCarlosHM/Weather_App",
        },
    ];

    return (
        <section id="portfolio">
            <h2>Projects</h2>
            {/* TODO: style this section */}
            {projects.map((project, i) => (
                <div key={i}>
                    <p><strong>{project.title}</strong></p>
                    <p>{project.description}</p>
                    <p>{project.tech.join(" · ")}</p>
                    {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">View on GitHub</a>}
                    {!project.url && <p><em>Private project</em></p>}
                </div>
            ))}
        </section>
    );
};

export default Portfolio;
