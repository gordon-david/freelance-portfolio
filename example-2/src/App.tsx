import { useState, useEffect } from "react";
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [annoyAlexDivs, setAnnoyAlexDivs] = useState<number[]>([]);

const AnnoyAlex = (props: any) => (
  <button
				onClick={() => setShowMenu(false)}
    style={props.style}
    className={
      "z-10 absolute animate-spin animate-bounce  bg-white border-2 border-black border-solid"
    }
  >
    CLICK ME
  </button>
);

  useEffect(() => {
    let output: any = [];

    for (let i = 0; i < 1000; i++) {
      output = [
        ...output,
        <AnnoyAlex
          key={i}
          style={{
            top: `${getRandomInt(568)}px`,
            left: `${getRandomInt(320)}px`,
          }}
        />,
      ];
    }
    console.log(output);
    setAnnoyAlexDivs((prev) => [...output]);
  }, []);

  // useEffect(() => console.log(annoyAlexDivs), [annoyAlexDivs])

  return (
    <div className="font-sans font-bold">
      {showMenu ? annoyAlexDivs : ""}

      <nav className="flex justify-between font-mono font-bold p-4 border-b-2 border-solid border-black">
        <a href="/">david gordon</a>{" "}
        <button onClick={() => setShowMenu(true)}>menu</button>
        <div
          className={`absolute right-0 top-9 bottom-0 h-screen w-screen bg-white w-60 opacity-25 transition-all duration-700 ease-in-out border-l-2 border-solid border-black ${
            showMenu ? "" : "translate-x-60"
          }`}
        >
          <button onClick={() => setShowMenu(false)}>close</button>
        </div>
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

const H1 = (props: { className?: string; children: string }) => (
  <h1 className={props.className + " font-bold text-4xl my-2"}>
    {props.children}
  </h1>
);

export default App;
