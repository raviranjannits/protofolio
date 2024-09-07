import SkillCard from "../Services/SkillCard";
import "./Projects.css";
import Project1 from "../../img/Project1.png";
import Project2 from "../../img/Project2.png";
import Project3 from "../../img/Project3.png";
import Oikyotaan from "../../img/Oikyotaan.png";
import OnlineMeal from "../../img/OnlineMeal.png";
import ProjectCard from "./ProjectCard";
import cpvalor from "../../img/cpvalor.png";
import Portfolio from "../../img/Portfolio.png";
import guidanceguru from "../../img/guidanceguru.png";
const Projects = ({ darkmode }) => {
  return (
    <div className="projects" id="Projects">
      <div className={`${darkmode ? "about-line" : ""}`}></div>
      <div className="project-title">
        Projects I've<span className="me"> Worked In</span>
      </div>
      <div className="project-content">
        <div className="backend-icons">
          <div className="project-icons">
            <SkillCard skill="NodeJS" icon="logos:nodejs" />
            <SkillCard skill="Prisma" icon="logos:prisma" />
            <SkillCard skill="TypeScript" icon="logos:typescript-icon" />
            <SkillCard skill="SASS" icon="logos:sass" />
            <SkillCard skill="ExpressJS" icon="skill-icons:expressjs-light" />
            <SkillCard skill="ReactJS" icon="logos:react" />
            <SkillCard skill="NextJS" icon="devicon:nextjs-wordmark" />
            <SkillCard skill="MongoDB" icon="logos:mongodb-icon" />
          </div>
          <div className="backend-projects">
            <ProjectCard
              name={"GRAFINY"}
              img={Project3}
              link={"https://dev--grafiny-nits.netlify.app/"}
              desc={
                "It allows you to share and view notes,assignments and other educational resources"
              }
              github={"https://github.com/gdsc-nits-org/grafiny-client"}
            />
            <ProjectCard
              name={"CSS Website"}
              img={Project2}
              link={"https://nits-css.live"}
              desc={
                "It is the official website of Computer Science Society, NIT Silchar"
              }
              github={
               "https://github.com/ComputerScienceSoceityNITS/CSSWebsite"
              }
            />
          </div>
        </div>
        <div className="backend-icons">
          <div className="project-icons">
            <SkillCard skill="Sveltekit" icon="logos:svelte-icon" />
            <SkillCard skill="CSS3" icon="logos:css-3" />
            <SkillCard skill="JavaScript" icon="logos:javascript" />
            <SkillCard skill="Netlify" icon="logos:netlify-icon" />
          </div>
          <div className="backend-projects">
            <ProjectCard
              name={"cpValor"}
              img={cpvalor}
              desc={"It calculates the worth of your coding profile"}
             github={""}
              link={"https://cpvalor.netlify.app"}
            />
            <ProjectCard
              name={"Guidance Guru"}
              img={guidanceguru}
              link={"https://guidanceguru.netlify.app"}
              desc={
                "It is an advice provider that gives you the correct guidance for every problem "
              }
              github={""}
            />
          </div>
        </div>
        <div className="backend-icons">
          <div className="project-icons">
            <SkillCard skill="ReactJS" icon="logos:react" />
            <SkillCard skill="SASS" icon="logos:sass" />
            <SkillCard skill="CSS3" icon="logos:css-3" />
            <SkillCard skill="JavaScript" icon="logos:javascript" />
          </div>
          <div className="backend-projects">
            <ProjectCard
              name={"Oikyotaan Website"}
              img={Oikyotaan}
              desc={`It is the official website of Bengali new year fest of our college - "Oikyotaan"`}
             link={"https://oikyotaan2023.in/"}
              github={"https://github.com/raviranjannits/my_protfolio"}
            />
            <ProjectCard
              name={"Personal Portfolio"}
              img={Portfolio}
              desc={
                "This is my personal portfolio showcasing my projects and skills."
              }
              link={"https://my-protfolio-xi-cyan.vercel.app/"}
             github={"https://github.com/raviranjannits/my_protfolio"}
            />
          </div>
        </div>
        <div className="backend-icons">
          <div className="project-icons">
            <SkillCard skill="HTML5" icon="logos:html-5" />
            <SkillCard skill="CSS3" icon="logos:css-3" />
            <SkillCard skill="JavaScript" icon="logos:javascript" />
            <SkillCard skill="GitHub" icon="logos:github-icon" />
          </div>
          <div className="backend-projects">
            <ProjectCard
              name={"My Weather Website"}
              img={Project1}
              desc={"An API based weather application"}
              link={"https://my-protfolio-xi-cyan.vercel.app/"}
              github={"https://github.com/raviranjannits/my_protfolio"}
            />
            <ProjectCard
              name={"My Online Meal"}
              img={OnlineMeal}
              desc={
                "An online meal ordering website where users can order delicious meals"
              }
             link={"https://my-protfolio-xi-cyan.vercel.app/"}
              
              github={"https://github.com/raviranjannits/my_protfolio"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
