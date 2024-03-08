const renderHero = () => {
	const heroContent = document.createElement("div")
	heroContent.innerHTML = `
		<h2>hoy 👋🏽</h2>
		<p>
			I'm Jeff Mancilla—a web developer and technologist based in Houston,
			TX.
		</p>
		<p>Check out some of my projects and let's connect!</p>
		<button>LinkedIn</button>
		<button>GitHub</button>
		<button>Resume</button>
		<img src="assets/jeffm-cartoon.webp" alt="cartoon Jeff" />
	`
	hero.appendChild(heroContent)
}

const aboutContent = () => {
	const aboutContent = document.createElement("div")
	aboutContent.innerHTML = `
		<h2>About</h2>
		<p>the quick brown fox jumps over the lazy dog</p>
	`
	about.appendChild(aboutContent)
}
;(() => {
	console.log("hi -Jeff")
	// renderHero()
})()
