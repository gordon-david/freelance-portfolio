import { useState } from "react";

function App() {
  return (
    <div className="bg-black">
      <div className="px-2 pt-2 pb-4 bg-black mx-auto max-w-screen-md text-white">
        <Navigation />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

const Navigation = () => (
  <header className="hidden md:flex space-x-4 h-8 align-center text-lg">
    <a href="#about">About</a>
    <a href="#services">Services</a>
  </header>
);

/* ABOUT */
const About = () => (
  <div className="text-center flex flex-col justify-center max-w-lg mx-auto">
    <div className="relative">
      <Image className="w-full min-w-0 mx-auto max-w-md" />
      <div className="max-w-md absolute mb-8 right-0 left-0 bottom-0 text-center m-auto">
        <h1 className="text-3xl font-bold text-center">David Gordon</h1>
        <h1 className="text-3xl font-bold text-center">Freelance Developer</h1>
      </div>
    </div>
    <p className="text-lg text-left">
      I build things of value for my client's clients. Let's work together to
      turn your ideas into websites and applications that work.
    </p>
  </div>
);

/* SERVICES */
const Services = () => (
  <div>
    <h1 className="text-3xl text-center font-bold">
      <a id="services">Services</a>
    </h1>
    <div className="flex flex-wrap justify-around">
      <ServiceCard
        title="Frontend Development"
        details="Websites that showcase your business to your customers and clients"
      />
      <ServiceCard
        title="Backend Development"
        details="Websites that showcase your business to your customers and clients"
      />
      <ServiceCard
        title="Landing Pages"
        details="Websites that showcase your business to your customers and clients"
      />
      <ServiceCard
        title="Website Consultations"
        details="Websites that showcase your business to your customers and clients"
      />
    </div>
  </div>
);

const ServiceCard = (props: { title: string; details: string }) => (
  <div className="max-w-xs my-4">
    <Image className="w-full" />
    <h3 className="text-xl text-center">{props.title}</h3>
    <p>{props.details}</p>
  </div>
);

/* CONTACT */
const Contact = () => (
  <div>
    Contact Me: <a href="mailto;gordopdavid@gmail.com">gordopdavid@gmail.com</a>
  </div>
);

/* FOOTER */

const Footer = () => (
  <div>
    <p className="text-center bg-black text-white">
      © David Gordon {new Date().getFullYear()}
    </p>
  </div>
);

/* UTILITY */
const SectionContainer = (
  props: { id: string; title: string; className: string },
  children: ReactNode
) => (
  <div id={props.id} className={`${props.className}`}>
    <h1>
      <a id={props.title}>{props.title}</a>
    </h1>
    {children}
  </div>
);

const Image = (props: { className: string }) => (
  <img
    className={props.className}
    src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
  />
);

export default App;
