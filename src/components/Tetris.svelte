<script>
	const TETRIS = {
		grid: { x: 10, y: 22 },
	}

	const createElement = (parentElement, element, id, className) => {
		const childElement = document.createElement(element)
		if (id) {
			childElement.id = id
		}
		if (className) {
			childElement.classList.add(className)
		}
		parentElement.appendChild(childElement)
	}

	const buildUI = () => {
		const tetrisDiv = document.querySelector('#tetris')

		//left ui
		createElement(tetrisDiv, 'div', 'ui-left')

		//grid
		createElement(tetrisDiv, 'div', 'grid')
		const gridDiv = document.querySelector('#grid')

		//right ui
		createElement(tetrisDiv, 'div', 'ui-right')

		for (let i = 0; i < TETRIS.grid.y; i++) {
			console.log(`y ${i}`)
			createElement(grid, 'div', `row-${i}`)
			const rowDiv = document.querySelector(`#row-${i}`)
			for (let j = 0; j < TETRIS.grid.x; j++) {
				console.log(`x ${j}`)
				createElement(rowDiv, 'div', null, 'square')
			}
		}
	}

	const init = () => {
        buildUI()
		const initButton = document.querySelector('#init')
		initButton.style = 'display: none'
	}
</script>

<button id="init" on:click={() => init()}>play</button>
<div id="tetris" />

<style>
	#tetris {
		width: min(22rem, 90vw);

		display: grid;
		grid-template-columns: 1fr 2fr 1fr;

		& > * {
			margin: 0.5rem;
			border: 1px groove currentcolor;
		}
		& #grid {
			display: flex;
			flex-direction: column;

			& > * {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

				& > * {
					border: 1px groove currentcolor;
					width: 1rem;
					height: 1rem;
				}
			}
		}
	}

	.square {
		border: 1px groove currentColor;
		width: 1rem;
		height: 1rem;
	}
</style>
