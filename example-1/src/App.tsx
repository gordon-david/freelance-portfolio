import { Component, ReactNode } from "react";
import {
  SVG_CSS3,
  SVG_HTML5,
  SVG_Java,
  SVG_JS,
  SVG_Linux,
  SVG_Node,
  SVG_PostgreSQL,
  SVG_Python,
  SVG_React,
  SVG_Tailwind,
  SVG_TS,
} from "./components/icons";

function App() {
  document.body.classList.add("bg-slate-300");

  return (
    <div className="h-full w-screen text-black">
      <Navigation />
      <About />
      <div className="px-2 pt-2 pb-4 mx-auto max-w-screen-md ">
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

const Navigation = () => (
  <header className="pt-2 px-4 hidden md:flex space-x-6 h-8 align-center text-lg bg-slate-600 text-slate-200 font-bold">
    <NavigationLink title="About" href="#about" />
    <NavigationLink title="Services" href="#services" />
    <NavigationLink title="Contact" href="#contact" />
  </header>
);

const NavigationLink = (props: { title: string; href: string }) => (
  <a href={props.href} className="hover:text-blue-300">
    {props.title}
  </a>
);

/* ABOUT */
const About = () => (
  <div className="flex flex-col justify-center mx-auto pb-20 pt-8 font-roboto-mono font-bold bg-slate-600 text-slate-200 w-full">
    <div className="mx-auto max-w-md">
      <h1 className="text-5xl font-roboto-mono font-bold mb-0">David Gordon</h1>
      <h2 className="text-lg mb-4">Greetings and Salutations!</h2>
      <p className="text-base font-normal font-serif">
        I am a <InlinePill>Software Engineer</InlinePill> focused on{" "}
        <InlinePill>Frontend</InlinePill> and <InlinePill>Backend</InlinePill>{" "}
        development of web technologies. My additional professional interests
        include <InlinePill>Game Programming</InlinePill>,{" "}
        <InlinePill>System Programming</InlinePill>, and{" "}
        <InlinePill>All Things Linux</InlinePill>.
      </p>
    </div>
  </div>
);

/* SERVICES */
const Services = () => (
  <SectionContainer title="Freelancing Services" id="services" className="">
    <p>
      I offer the following consulting and contract services to help small
      businesses thrive on the internet.
    </p>
    <div className="flex flex-wrap justify-around items-stretch">
      <ServiceCard
        title="Frontend Development"
        details="I want to help you build a website that showcases your business to your customers and clients."
        techIcons={[
          SVG_HTML5,
          SVG_CSS3,
          SVG_React,
          SVG_JS,
          SVG_TS,
          SVG_Tailwind,
        ]}
      />
      <ServiceCard
        title="Backend Development"
        details="Keeping your infrastructure and integration systems happy."
        techIcons={[SVG_Node, SVG_Python, SVG_Java, SVG_PostgreSQL, SVG_Linux]}
      />
      <ServiceCard
        title="Website Consultations"
        details="I'm always happy to consult with medium and small businesses on performance issues or website updates. Even if you aren't sure what direction to take your website but you know that something needs to change, feel free to reach out!"
      />
    </div>
  </SectionContainer>
);

const ServiceCard = (props: {
  techIcons?: any[];
  title: string;
  details: string;
  imageSource?: string;
}) => (
  <div className="my-4 w-full sm:w-72 bg-slate-600 p-4 text-slate-200">
    {props.imageSource ? (
      <Image className="w-full" src={props.imageSource} />
    ) : (
      ""
    )}
    <h3 className="text-2xl font-bold text-center mb-2">{props.title}</h3>
    <p className="font-serif">{props.details}</p>
    <div className="relative shrink flex flex-wrap justify-around space-x-6 mt-8">
      {!props.techIcons
        ? ""
        : props.techIcons.map((Icon, idx) => {
            return <Icon key={idx} className="w-12 mb-4" />;
          })}
    </div>
  </div>
);

/* CONTACT */
const Contact = () => (
  <SectionContainer title="Contact Me" id="contact" className="text-center">
    <p>
      Email:{" "}
      <span>
        <a
          href="mailto:gordopdavid@gmail.com"
          className="text-red-500 hover:text-red-200"
        >
          gordopdavid@gmail.com
        </a>
      </span>
    </p>
  </SectionContainer>
);

/* FOOTER */

const Footer = () => (
  <div className="mt-8 mb-2">
    <p className="text-center">© David Gordon {new Date().getFullYear()}</p>
  </div>
);

/* UTILITY */
const InlinePill = (props: { children: ReactNode }) => (
  <span className="bg-slate-200 text-slate-600 rounded-sm px-1 ">
    {props.children}
  </span>
);

const SectionContainer = (props: {
  id: string;
  title: string;
  className?: string;
  children: ReactNode;
}) => (
  <div id={props.id} className={`${props.className}`}>
    <h1 className="text-center text-3xl font-bold font-sans my-4">
      <a id={props.title}>{props.title}</a>
    </h1>
    {props.children}
  </div>
);

const Image = (props: { className: string; src?: string }) => (
  <img
    className={props.className}
    src={
      props.src
        ? props.src
        : "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
    }
  />
);

export default App;
