import { useState, ReactNode } from "react";

interface Project {
  img?: { src: string };
  title: string;
  description: string;
  source?: { href: string; text: string };
  demo?: { href: string; text: string };
}

const projects: Project[] = [
  {
    title: "Chat Application",
    description:
      "An anonymous chat application built using a Java Spring backend, a PostgreSQL database, and a React client. The backend is fully containerized and running in an AWS EC2 instance.",
    source: {
      href: "https://github.com/gordon-david/chat",
      text: "source",
    },
    demo: { href: "https://chat.underengineered.dev", text: "demo" },
    img: { src: "/static/chat-screenshot.png" },
  },
  {
    title: "Photographer (CMS Backed Website)",
    description:
      "A website built with a React client and a Strapi CMS backend. The goal was to provide a site for a photographer that allows the client to manage the images on the site without developer intervention. The backend may be easily deployed as a container.",
    source: {
      href: "https://github.com/gordon-david/photographer",
      text: "source",
    },
    img: { src: "/static/photographer-screenshot.png" },
  },
  {
    title: "User Account System",
    description:
      "This project aims to exhibit a JSON Web Token based authentication scheme using Spring Security. The project includes a Vue client for prototyping. The API is written in Java and is unit tested with JUnit. The database is PostgreSQL and is deployed as a container with a seed SQL file. The API exposes three resources aligning with three levels of access roles: Public, User, and Admin.",
    source: {
      href: "https://github.com/gordon-david/useraccounts",
      text: "source",
    },
    img: { src: "/static/useraccounts-screenshot.png" },
  },
  {
    title: "Personal Website (here)",
    description:
      "This is my website, the one you're currently looking at. Feel free to peruse and use the repository!",
    source: {
      href: "https://github.com/gordon-david/freelance-portfolio",
      text: "source",
    },
    demo: {
      href: "/",
      text: "demo",
    },
    img: { src: "/static/personalwebsite-screenshot.png" },
  },
];

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="font-sans font-bold bg-white">
      <nav className="max-w-screen-md mx-auto flex justify-between font-mono font-bold p-4 border-b-2 border-solid border-black">
        <Link href="/">david gordon</Link>
        <button onClick={() => setShowMenu(true)}>menu</button>
        <div
          className={` p-8 fixed right-0 top-0 bottom-0 h-screen bg-white w-60 transition-all duration-700 ease-in-out border-l-2 border-solid border-black ${
            showMenu ? "" : "translate-x-60"
          }`}
        >
          <button className="mb-8" onClick={() => setShowMenu(false)}>
            close
          </button>
          <ul className="space-y-3">
            <li>
              <Link href="https://www.github.com/gordon-david">github</Link>
            </li>
            <li>
              <Link href="https://www.underengineered.dev">hobby blog</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/david-gordon-71793926a">
                linked-in
              </Link>
            </li>
            <li>
              <Link href="/static/DavidGordon_resume.pdf">my resume</Link>
            </li>
          </ul>
        </div>
      </nav>
      <header className="px-4 mt-20 mb-48 max-w-screen-sm mx-auto">
        <H1>David Gordon, Software Engineer</H1>
        <Prose>
          I'm a software engineer focused on frontend and backend development of
          stable, scalable web technologies. I'm currently open for full-time
          and contract development work. My technical and professional interests
          also include System Programming, Game Programming, Math, and All
          Things Linux.
        </Prose>
        <Prose>
          <Link underline href="mailto:gordopdavid@gmail.com">
            gordopdavid@gmail.com
          </Link>
        </Prose>
      </header>
      <main className="px-4 mt-4 mb-8 max-w-screen-sm mx-auto md:max-w-screen-md">
        <section className="space-y-2">
          <H1>Featured Projects</H1>

          {projects.map((project) => (
            <div key={project.title}>
              <div className="hidden sm:block">
                <ProjectCardLG
                  title={project.title}
                  description={project.description}
                  source={project.source}
                  demo={project.demo}
                  img={project.img}
                />
              </div>
              <div className="sm:hidden">
                <ProjectCardSM
                  title={project.title}
                  description={project.description}
                  source={project.source}
                  demo={project.demo}
                  img={project.img}
                />
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

const ProjectCardLG = (props: {
  img?: { src: string };
  title: string;
  description: string;
  source?: { href: string; text: string };
  demo?: { href: string; text: string };
}) => (
  <div className="w-full border-2 border-blackflex flex py-1 px-1 h-96">
    <div className="w-2/5 object-cover bg-gray-300">
      {props.img ? (
        <img
          className="w-full h-full object-top object-cover border-2 border-gray-300 bg-gray-300"
          src={props.img.src}
          alt=""
        />
      ) : null}
    </div>
    <div className="w-3/5 p-1">
      <h3 className="text-center">{props.title}</h3>
      {props.source ? (
        <Link href={props.source.href} display="block">
          {props.source.text}
        </Link>
      ) : null}
      {props.demo ? (
        <Link href={props.demo.href} display="block">
          {props.demo.text}
        </Link>
      ) : null}
      <Prose>{props.description}</Prose>
    </div>
  </div>
);

const ProjectCardSM = (props: {
  img?: { src: string };
  title: string;
  description: string;
  source?: { href: string; text: string };
  demo?: { href: string; text: string };
}) => (
  <div className="w-full border-2 border-black py-1 px-1">
    <div className="w-full h-72 sm:h-80 md:h-96 bg-gray-300">
      {props.img ? (
        <img
          className="max-w-sm mx-auto w-full h-full object-top object-cover border-2 border-gray-300 bg-gray-300"
          src={props.img.src}
          alt=""
        />
      ) : (
        <div className="bg-black w-full h-full"> </div>
      )}
    </div>
    <h3 className="text-center">{props.title}</h3>
    {props.source ? (
      <Link href={props.source.href} display="block">
        {props.source.text}
      </Link>
    ) : null}
    {props.demo ? (
      <Link href={props.demo.href} display="block">
        {props.demo.text}
      </Link>
    ) : null}
    <Prose>{props.description}</Prose>
  </div>
);

/* UTILITY */

const H1 = (props: { children: string }) => (
  <h1 className="font-sans mb-4 font-bold text-4xl my-2">{props.children}</h1>
);

const Prose = (props: { children: ReactNode }) => (
  <p className="mb-4 mt-1">{props.children}</p>
);

const Link = (props: {
  children: ReactNode;
  underline?: boolean;
  href: string;
  display?: "block" | "inline";
}) => (
  <a
    className={`${props.underline ? "underline " : ""} ${
      props.display && props.display + " "
    } text-red-900 hover:text-red-500`}
    href={props.href}
  >
    {props.children}
  </a>
);

export default App;
