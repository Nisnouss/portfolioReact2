import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps ={
    title: string;
    description: string;
    link: string;
    link2: string
};

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, link, link2})=>(
    <div className="project-card">
        <h3>{title}</h3>
        <p id="pproject">{description}</p>
        <div className="link-project">
            <article>
                <a id="linkgit" target="_blank" href={link}>Lien vers un premier projet <FaExternalLinkAlt /></a>
            </article>
            <article>
                <a id="linkgit" target="_blank" href={link2}>Lien vers un second projet <FaExternalLinkAlt /></a>
            </article>
            </div>
    </div>
);

export default ProjectCard;