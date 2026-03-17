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
        <a id="linkgit" target="_blank" href={link}>Lien vers un premier projet <FaExternalLinkAlt /></a>
        <br />
        <a id="linkgit" target="_blank" href={link2}>Lien vers un second projet <FaExternalLinkAlt /></a>
    </div>
);

export default ProjectCard;