/**
 *
 * @param {string} url
 * @returns {Promise<JSON | undefined>} l
 */
const fetchData = async (url) => {
	try {
		const response = await fetch(url)
		return response.status == 200
			? await response.json()
			: console.error(response.status, response.body)
	} catch (error) {
		console.error(error)
	}
}

//data dragon docs https://developer.riotgames.com/docs/lol
// MAPS
// - 11: summoner's rift
// - 12: aram
const mapsUrl = 'https://static.developer.riotgames.com/docs/lol/maps.json'
const mapsData = await fetchData(mapsUrl)

// ITEMS
// NA Versions = "https://ddragon.leagueoflegends.com/realms/na.json"
const region = 'na'
const versionsUrl =
	'https://ddragon.leagueoflegends.com/realms/' + region + '.json'
// example item url (note version# in path) http://ddragon.leagueoflegends.com/cdn/13.18.1/data/en_US/item.json
const naVersions = await fetchData(versionsUrl)
const itemsUrl =
	'https://ddragon.leagueoflegends.com/cdn/' +
	naVersions.n.item +
	'/data/en_US/item.json'
const itemsData = await fetchData(itemsUrl)

export const load = async () => {
	return {
		version: itemsData.version,
		items: Object.values(itemsData.data),
		maps: Object.values(mapsData).filter(
			(map) => map.mapId == 11 || map.mapId == 12
		),
	}
}
