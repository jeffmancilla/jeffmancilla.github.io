<script>
	import data from "./League.js"
	console.dir(data)

	let search;
	let map = 11;
	$: filteredItems = filterItems(data.items, map, search);

	function filterItems(array, map, query) {
		let filteredArray = []
		//pre-filters + map filter
		filteredArray = array.filter((element) => element.gold.purchasable == true && element.gold.total > 0 && element.maps[map] == true);
		//search filter
		if (query) {
			return filteredArray.filter((element) => element.name.toLowerCase().includes(query.toLowerCase()));
		}``
		return filteredArray;
	}

	function itemUrl(item) {
		return 'http://ddragon.leagueoflegends.com/cdn/' + data.version + '/img/item/' + item;
	}
</script>
<div>
	<h3>Filters</h3>
	<input bind:value={search} placeholder="search" />
	<select bind:value={map}>
		{#each data.maps as map}
			<option value={map.mapId}>{map.mapName}</option>
		{/each}
	</select>
</div>
<div>
	{#each filteredItems as item}
		<button class="item" popovertarget={item.image.full}>
			<img src={itemUrl(item.image.full)} alt="item #{item.image.full.slice(0, 4)}" />
			{item.gold.total}
			<div popover class="details" id={item.image.full}>
				<div class="container">
					<img src={itemUrl(item.image.full)} alt="item #{item.image.full.slice(0, 4)}" />
					<div>
						<div class="inline">
							<h5>
								{item.name}
							</h5>
						</div>
						<div class="inline">
							{item.gold.total}
							<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 32 32"
								><g fill="none"
									><circle cx="16" cy="16" r="16" fill="#F1B32B" /><path
										fill="#FFF"
										d="M15.75 4C9.26 4 4 9.26 4 15.75S9.26 27.5 15.75 27.5S27.5 22.24 27.5 15.75A11.75 11.75 0 0 0 15.75 4zm0 20.57a8.82 8.82 0 1 1 0-17.64a8.82 8.82 0 0 1 0 17.64zm-2.93-8.81l2.94 4.4l2.92-4.4l-2.92-4.41l-2.94 4.41z"
									/></g
								></svg
							>
						</div>
					</div>
				</div>
				<p>
					{@html item.description}
				</p>
			</div>
		</button>
	{/each}
</div>

<style>
	button {
		background: var(--surface-2);
		border-radius: 0;
		padding: 0;
		border: 0;
		box-shadow: var(--inner-shadow-4);
		--_highlight: 0;
		margin: var(--size-1);
	}

	.item {
		display: inline-block;
		color: hsl(40, 50%, 50%);
		font-family: 'Balthazar', var(--font-serif);
	}
	.item img {
		width: var(--size-relative-10);
		height: var(--size-relative-10);
	}
	.container {
		display: flex;
		gap: var(--size-2);
	}
	.details * {
		text-align: left;
		color: var(--text-2);
	}
	.details h5 {
		text-transform: uppercase;
		color: hsl(40, 50%, 50%);
	}
	.inline * {
		display: inline;
		vertical-align: text-bottom;
	}
</style>
