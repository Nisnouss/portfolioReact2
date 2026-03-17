import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import '../styles/Home.scss';
import { FaHtml5, FaCss3Alt, FaPython, FaPhp, FaNodeJs, FaWordpress, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { BsJavascript } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";

const Home = () =>{
    return(
        <>
        <meta name="view-transition" content="same-origin" />
        <header>
            <h1>Portfolio - Nisrine BOUTAHAR</h1>
            
            <Header />
        </header>

        <main>
            <section id="sectionHome">
                <div className="presentation">
                    <h2>Présentation</h2>
                    <br />
                    <p className="first">Après une formation courte et intensive dans les fondements des divers langages de programmation, mon projet de poursuivre mon cursus dans le développement web full-stack s'est davantage confirmé. J'ai eu la possibilité de consolider à la fois mes connaissances et ma pratique dans le développement de sites web et applications, que ce soit du côté client ou du côté serveur.</p>
                    <p>Cette initiation à l'apprentissage de concepteur de site web et application, m'a permis de prendre en compte les requis indispensables à la fonction, tels que les connaissances, la méthodologie, les ressources, et les problématiques récurrentes auxquelles font face les développeurs. Curieuse et très intéressée par la résolution de problèmes, cette formation m'a été très enrichissante et a consolidé mon objectif qui est de devenir développeuse web full-stack. Je souhaite davantage étendre mon savoir,            pratiquer différents cas de figure afin de consolider mes compétences de manière optimale pour mon objectif.</p> 
                    <p>Dans ce portfolio, se trouvent l'ensemble des informations me concernant que ce soit mes formations, expériences professionnelles, compétences et projets démontrant concrètement mes acquis. Il est également possible de me contacter par mon adresse mail, accessible dans son espace dédié “Contact”. Je suis ouverte à toute expérience instructive et formative.</p>
                </div>
                <div className="langages-informatiques">
                    <h2>Mes langages informatiques</h2>
                    <div className="icons">
                        <article><FaHtml5 /></article>
                        <article><FaCss3Alt /></article>
                        <article><FaPython /></article>
                        <article><FaPhp /></article>
                        <article><GrMysql /></article>
                        <article><BsJavascript /></article>
                        <article><FaNodeJs /></article>
                        <article><SiMongodb /></article>
                        <article><FaWordpress /></article>
                        <article><FaReact /></article>
                    </div>
                </div>
                <div className="Formations">
                    <article className="formarticle">
                        <h2>Mes Formations</h2>
                        <br />
                        <ul>
                            <li><span>2025 - 2026</span> Formation langage informatique à la carte</li>
                            <p>La Plateforme, Brignoles</p>
                            <br />
                            <li><span>2019 - 2023</span> Licence Sciences du Langage</li>
                            <p>Faculté d'Arts, Lettres, Langues et Sciences Humaines, Aix-en-Provence (13)</p>
                            <br />
                            <li><span>2017 - 2019</span> Baccalauréat Scientifique avec mention</li>
                            <p>Lycée Thomas Edison, Lorgues (83)</p>
                        </ul>
                    </article>
                    <article className="formarticle">
                        <h2>Mes expériences professionnelles</h2>
                        <br />
                        <ul>
                            <li><span>Avril 2025 - Août 2025</span> Agent de tri</li>
                            <p>Colissimo, Les Arcs (83)</p>
                            <p className="desc">Tri manuel et mécanisé, manipulation du tapis de tri, contrôle de l'état des colis</p>
                            <br />
                            <li><span>2021 - 2024</span> Aidante familiale</li>
                            <p>Vidauban (83)</p>
                            <p className="desc">Gestion de documents administratifs, prodiguer des soins d'hygiène et de bien-être</p>
                            <br />
                            <li><span>2023</span> Agent d'entretien</li>
                            <p>Hôtel Mercure, Fréjus (83)</p>
                            <p className="desc">Réfection de lits, nettoyage des chambres et salles de bains</p>
                        </ul>
                    </article>
                    <article className="formarticle">
                        <h2>Compétences acquises</h2>
                        <br />
                        <ul>
                            <li>Maîtrise des bases de divers langages de programmation</li>
                            <br />
                            <li>Bases de la programmation côté serveur et client</li>
                            <br />
                            <li>Aisance avec les outils numériques</li>
                            <br />
                            <li>Autonomie</li>
                            <br />
                            <li>Respect des règles et consignes de sécurité</li>
                        </ul>
                    </article>
                </div>
            </section>
        </main>

        <footer>

        </footer>
        <Footer />
        </>
    )
};

export default Home;