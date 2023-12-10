<script>
	import { onMount } from 'svelte'

	$: santaList = null

	const fetchSantaList = async () => {
		const url = `https://advent.sveltesociety.dev/data/2023/day-one.json`
		try {
			const response = await fetch(url)
			if (response.status !== 200) {
				throw new Error(`${response.status}: ${response.statusText}`)
			} else {
				const data = await response.json()
				santaList = [...data]
			}
		} catch (err) {
			console.error(err)
		}
	}

	onMount(() => {
		fetchSantaList()
	})
	let searchValue = null
	$: children = !searchValue
		? santaList
		: santaList.filter((child) =>
				child.name.toLowerCase().includes(searchValue.toLowerCase())
		  )
</script>
<search>
	<input type="search" bind:value={searchValue} />
</search>
<ul>
	{#each children as child}
		<li class={child.tally < 0 ? 'naughty' : 'nice'}>
			<div>
				<span>
					{child.name}
				</span>
				<span>
					{child.tally}
				</span>
			</div>
			<div>
				<button on:click={()=>child.tally--}>naughty</button>
				<button on:click={()=>child.tally++}>nice</button>
			</div>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding-left: 0;

		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	ul > li {
		border-radius: 1rem;
		padding: 1rem;
	}
	ul > li > div:first-of-type {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}
	.naughty {
		background-color: color-mix(in srgb, red 15%, transparent);
	}
	.nice {
		background-color: color-mix(in srgb, green 15%, transparent);
	}
</style>
