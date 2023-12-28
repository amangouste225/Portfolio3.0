import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Elancerz",
    imgSrc: "/project-imgs/elancerz.png",
    code: "https://www.github.com",
    projectLink: "https://elancerz.com/",
    tech: ["React", "Nextjs", "Sytled Components", "Firebase Auth", "Laravel"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Worked as a senior developer and created dynamic reusable components,
          integrated calendly, messaging and project management features.
        </p>
        <p>
          The tech stack is based on Nextjs with the custom Styled components,
          connected to a Laravel backend, with data stored in Mysql.
        </p>
      </>
    ),
  },
  {
    title: "Agency Iron Admin",
    imgSrc: "/project-imgs/agency-iron-crm.png",
    code: "https://www.github.com",
    // projectLink: "https://agency-iron-crm.herokuapp.com/",
    projectLink: "#",
    tech: ["React", "MUI", "MongoDB", "Postgres", "Python"],
    description:
      "A Dashboard for clients and admin of Rocky Mountain West Insurance LLC. using Vuejs and re-worked using Reactjs.",
    modalContent: (
      <>
        <p>
          Worked as a senior developer for this web application. Integrated
          api&apos;s, Created dynamic and reusable components.
        </p>
        <p>
          I work primarily on the frontend, creating reusable components and
          integrating api.
        </p>
        <p>
          The team in total consists of 3 developers. This is a passion project
          for all of us.
        </p>
      </>
    ),
  },
  {
    title: "IUGB University Page",
    imgSrc: "/project-imgs/wh_app.png",
    code: "https://www.github.com",
    projectLink: "https://iugb.edu.ci/",
    tech: ["Wordpress", "Elementor", "Yoast SEO", "Block"],
    description:
      "As a world-class, not-for-profit, American-style institution.",
    modalContent: (
      <>
        <p>
          As a world-class, not-for-profit, American-style institution, IUGB’s
          mission is to deliver an English-language liberal arts education in
          fields critical to growth and development of Côte d’Ivoire and West
          Africa. The university offers six career-oriented degree programs
          through two schools: The School of Business and Social Sciences (BSS)
          and the School of Science, Technology, Engineering and Mathematics
          (STEM). IUGB also offers a University Preparatory Program.
        </p>
        <p>This is a very fun project that i made using React Native.</p>
      </>
    ),
  },
  {
    title: "Aside Studio Landing Page",
    imgSrc: "/project-imgs/worshiphim.png",
    code: "https://www.github.com",
    projectLink: "https://worshiphim.vercel.app/",
    tech: ["React", "Nextjs", "Tailwind", "Google Play Scrapper", "Ko-Fi"],
    description:
      "Landing Page of WorshipHIM mobile application for showcasing feature rich and tools of the app.",
    modalContent: (
      <>
        <p>
          This is another self project that i made to showcase our mobile app.
        </p>
        <p>
          I integrated ko-fi donation and uses Template for this Nextjs Project.
          I also use a plugin for scrapping data from our google play to display
          directly on the landing page.
        </p>
      </>
    ),
  },
];
