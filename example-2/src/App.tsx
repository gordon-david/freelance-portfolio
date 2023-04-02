import { useState } from "react";

function App() {
  return (
    <div className="font-sans font-bold">
      <nav className="flex justify-between font-mono font-bold p-4 border-b-2 border-solid border-black">
        <a href="/">david gordon</a> <button>menu</button>
      </nav>
      <main className="px-4 mt-8 mb-8">
        <header className="mt-20 mb-60">
          <H1 className="font-sans mb-4">David Gordon, Software Engineer</H1>
          <p className="mb-4">
            I'm a software engineer focused on frontend and backend development
            for web technologies based out of Wisconsin. I'm currently open for
            full-time and contract development work. My technical and
            professional interests include System Programming, Game Programming,
            Math, and All Things Linux.
          </p>
          <a className="block underline" href="mailto:gordopdavid@gmail.com">
            gordopdavid@gmail.com
          </a>
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

const H1 = ({ className, children }) => (
  <h1 className={className + " font-bold text-4xl my-2"}>{children}</h1>
);

export default App;
