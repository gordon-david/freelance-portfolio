import { ReactNode, useState } from "react";

function App() {
    document.body.classList.add("bg-slate-300")

    return (
        <div className="font-mono h-full w-screen text-black">
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
    <header className="hidden md:flex space-x-4 h-8 align-center text-lg">
        <a href="#about">About</a>
        <a href="#services">Services</a>
    </header>
);

/* ABOUT */
const About = () => (
    <div className="text-center flex flex-col justify-center mx-auto mb-8">
        <div className="relative w-full">
            <Image className="w-full min-w-0 mx-auto max-w-full" src="/static/car.jpg" />
            <div className="absolute mb-8 right-0 left-0 bottom-0 m-auto text-2xl font-bold text-center font-mono md:text-3xl lg:text-5xl">
                <h1>David Gordon</h1>
                <h1>Freelance Developer</h1>
            </div>
        </div>
        <p className="text-lg text-left font-mono md:text-3xl lg:text-5xl">
            I build things of value for my client's clients. Let's work together to
            turn your ideas into websites and applications that work.
        </p>
    </div>
);

/* SERVICES */
const Services = () => (
    <SectionContainer title="Services" id="services" className="" >
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
    </SectionContainer>
);

const ServiceCard = (props: { title: string; details: string }) => (
    <div className="max-w-xs my-4">
        {/* <Image className="w-full" /> */}
        <h3 className="text-xl text-center mb-8">{props.title}</h3>
        <p>{props.details}</p>
    </div>
);

/* CONTACT */
const Contact = () => (
    <SectionContainer title="Contact Me" id="contact" className="text-center">
        <p>
            Email: <span>
                <a href="mailto:gordopdavid@gmail.com" className="text-red-500 hover:text-red-200">gordopdavid@gmail.com</a>
            </span>
        </p>
    </SectionContainer>
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
    props: { id: string; title: string; className?: string, children: ReactNode },
) => (
    <div id={props.id} className={`${props.className}`}>
        <h1 className="text-center text-3xl font-bold font-mono my-4">
            <a id={props.title}>{props.title}</a>
        </h1>
        {props.children}
    </div>
);

const Image = (props: { className: string, src?: string }) => (
    <img
        className={props.className}
        src={(props.src) ? props.src : "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"}
    />
);

export default App;
