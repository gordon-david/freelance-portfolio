import { useState, ReactNode } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="font-sans font-bold bg-white">
      <nav className="flex justify-between font-mono font-bold p-4 border-b-2 border-solid border-black">
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
          </ul>
        </div>
      </nav>
      <main className="px-4 mt-8 mb-8">
        <header className="mt-20 mb-60">
          <H1>David Gordon, Software Engineer</H1>
          <Prose>
            I'm a software engineer focused on frontend and backend development
            of stable, scalable web technologies. I'm currently open for
            full-time and contract development work. My technical and
            professional interests also include System Programming, Game
            Programming, Math, and All Things Linux.
          </Prose>
          <Prose>
            <Link underline href="mailto:gordopdavid@gmail.com">
              gordopdavid@gmail.com
            </Link>
          </Prose>
        </header>
        <section className="space-y-2">
          <H1>Featured Projects</H1>
          <div className="bg-black w-full h-96"></div>
          <div className="bg-black w-full h-96"></div>
          <div className="bg-black w-full h-96"></div>
        </section>
      </main>
    </div>
  );
}

/* UTILITY */

const H1 = (props: { children: string }) => (
  <h1 className="font-sans mb-4 font-bold text-4xl my-2">{props.children}</h1>
);

const Prose = (props: { children: ReactNode }) => (
  <p className="mb-4">{props.children}</p>
);

const Link = (props: {
  children: ReactNode;
  underline?: boolean;
  href: string;
}) => (
  <a
    className={`${props.underline ? "underline " : ""}hover:text-red-600`}
    href={props.href}
  >
    {props.children}
  </a>
);

export default App;
