import { useEffect, useState } from "react";
import ProjectCard from '../components/ProjectCard';
import Footer from "../components/Footer.tsx";
import data from '../data/projects.json';
import '../styles/Projects.scss';
import {Link} from 'react-router-dom';

type Project={
    id: number;
    title: string;
    description: string;
    link: string;
    link2: string
}

const Projects = () =>{
    const [projects, setProjects] = useState<Project[]>([]);
    const [search, setSearch] = useState('');

    useEffect(()=>{
        setProjects(data)
    }, []);

    const filteredProjects = projects.filter((project) =>
        project.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
);

return(
    <section id="section__projects">
        <meta name="view-transition" content="same-origin" />
        <Link to="/" id="return"> Retour à l'accueil</Link>
        <div className="search">
            <h2>Mes Projets</h2>
            <input
            type="text"
            placeholder="Rechercher un projet..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>

        <div className="project-list">
            {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                    <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    link2={project.link2}
                    />
                ))
            ) : (
                <p>Aucun projet ne correspond à votre recherche</p>
            )}
        </div>
        <Footer />
    </section>
)
}

export default Projects;