const Certificates = () => {
    const certs = [
        {
            title: "Mathematics for Machine Learning: Linear Algebra",
            issuer: "Imperial College London",
            date: "Nov 2025",
            id: "CD5JY1UWEIKG",
        },
        {
            title: "Oracle Certified AI Foundations Associate",
            issuer: "Oracle",
            date: "Aug 2025",
            id: null,
        },
        {
            title: "Problem Solving (Intermediate)",
            issuer: "HackerRank",
            date: "Aug 2024",
            id: "961cb464f6f5",
        },
        {
            title: "IBM Full Stack Software Developer",
            issuer: "IBM",
            date: "Jun 2024",
            id: "PENHRAYZ8SFR",
        },
        {
            title: "Application Development using Microservices and Serverless",
            issuer: "Coursera",
            date: "Oct 2023",
            id: null,
        },
        {
            title: "Container & Kubernetes Essentials V2",
            issuer: "Coursera",
            date: "Oct 2023",
            id: null,
        },
        {
            title: "Developing Applications with SQL, Databases, and Django",
            issuer: "Coursera",
            date: "Oct 2023",
            id: null,
        },
        {
            title: "Python Project for AI and Application Development",
            issuer: "Coursera",
            date: "Sep 2023",
            id: null,
        },
        {
            title: "Containers & Kubernetes Essentials",
            issuer: "IBM",
            date: "Mar 2023",
            id: "e1da43af-f1c9-4905-af6b-e8493876998f",
        },
        {
            title: "Cloud Core",
            issuer: "IBM",
            date: "Feb 2023",
            id: "63bbbafb-c4d0-4479-8b3a-5c656be2d18f",
        },
    ];

    return (
        <section id="certificates">
            <h2>Certifications</h2>
            {/* TODO: style this section */}
            {certs.map((cert, i) => (
                <div key={i}>
                    <p><strong>{cert.title}</strong></p>
                    <p>{cert.issuer} · {cert.date}</p>
                    {cert.id && <p>ID: {cert.id}</p>}
                </div>
            ))}
        </section>
    );
};

export default Certificates;
