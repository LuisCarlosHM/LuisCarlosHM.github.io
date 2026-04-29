const Certificates = () => {
    const certs = [
        {
            title: "Mathematics for Machine Learning: Linear Algebra",
            issuer: "Imperial College London",
            date: "Nov 2025",
        },
        {
            title: "Oracle Certified AI Foundations Associate",
            issuer: "Oracle",
            date: "Aug 2025",
        },
        {
            title: "Problem Solving (Intermediate)",
            issuer: "HackerRank",
            date: "Aug 2024",
        },
        {
            title: "IBM Full Stack Software Developer",
            issuer: "IBM",
            date: "Jun 2024",
        },
        {
            title: "Application Development using Microservices and Serverless",
            issuer: "Coursera",
            date: "Oct 2023",
        },
        {
            title: "Container & Kubernetes Essentials V2",
            issuer: "Coursera",
            date: "Oct 2023",
        },
        {
            title: "Developing Applications with SQL, Databases, and Django",
            issuer: "Coursera",
            date: "Oct 2023",
        },
        {
            title: "Python Project for AI and Application Development",
            issuer: "Coursera",
            date: "Sep 2023",
        },
        {
            title: "Containers & Kubernetes Essentials",
            issuer: "IBM",
            date: "Mar 2023",
        },
        {
            title: "Cloud Core",
            issuer: "IBM",
            date: "Feb 2023",
        },
    ];

    return (
        <section className="certificates">
            <h2 className="certificates__title">Certifications</h2>
            <div className="certificates__grid">
                {certs.map((cert, i) => (
                    <div key={i} className="certificates__card">
                        <p className="certificates__card__title">{cert.title}</p>
                        <p className="certificates__card__issuer">{cert.issuer}</p>
                        <p className="certificates__card__date">{cert.date}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
