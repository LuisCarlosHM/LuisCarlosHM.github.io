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
            url: null,
        },
        {
            title: "Personal Finance Tracker",
            description: "Personal finance tracking dashboard built with JavaScript and Chart.js.",
            tech: ["JavaScript", "Chart.js"],
            url: null,
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
        <section className="portfolio">
            <h2 className="portfolio__title">Projects</h2>
            <div className="portfolio__grid">
                {projects.map((project, i) => (
                    <div key={i} className="portfolio__card">
                        <p className="portfolio__card__title">{project.title}</p>
                        <p className="portfolio__card__description">{project.description}</p>
                        <div className="portfolio__card__tags">
                            {project.tech.map((tag, j) => (
                                <span key={j} className="portfolio__card__tag">{tag}</span>
                            ))}
                        </div>
                        {project.url
                            ? <a href={project.url} target="_blank" rel="noopener noreferrer" className="portfolio__card__link">View on GitHub →</a>
                            : <p className="portfolio__card__private">Private project</p>
                        }
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
