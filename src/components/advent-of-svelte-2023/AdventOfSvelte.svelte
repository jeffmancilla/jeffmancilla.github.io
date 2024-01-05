<script>
	import Day1 from './Day1.svelte'
</script>

<h1>Advent of Svelte</h1>

<section>
	My solutions to <a href="https://advent.sveltesociety.dev/#challenges"
		>Advent of Svelte challenges</a
	>!
</section>

<section>
	<details>
		<summary>Day 1 - Naughty or Nice</summary>
		<Day1 />
	</details>
</section>

<style>
	details {
		margin: 1rem;
	}

	summary {
		color: lightgreen;
		cursor: pointer;
		padding: 1rem 0;
	}

	details[open] > summary {
		color: pink;
	}
</style>
