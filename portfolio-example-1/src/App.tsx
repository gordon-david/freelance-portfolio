import { useState } from 'react'

function App() {

  return (
    <div className="">
				<Navigation />
			<About />
			<Services />
    </div>
  )
}

const Navigation = () => <header className="hidden md:flex">My Header</header>

const About = () => <div className="text-center space-y-4">
	<h1 className="text-3xl font-bold">David Gordon</h1>
	<h1 className="text-3xl font-bold">Web & Software Development</h1>
	<p>I build things of value for my client's clients.</p>
</div>

const Services = () => <div>
</div>

const SectionContainer = (props: {id: string}, children: ReactNode) => <div id={props.id}>{children}</div>

export default App
