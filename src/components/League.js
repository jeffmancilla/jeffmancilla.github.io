export async function load() {
	return {
		items: Object.values(itemsData.data),
		maps: Object.values(maps).filter((map) => map.mapId == 11 || map.mapId == 12 || map.mapId == 30),
		version: itemsData.version

	};
}

//data dragon docs https://developer.riotgames.com/docs/lol
//Maps
//11: summoner's rift
//12: aram
const mapsUrl = 'https://static.developer.riotgames.com/docs/lol/maps.json';
//NA Versions = "https://ddragon.leagueoflegends.com/realms/na.json"
const region = 'na';
const versionsUrl = 'https://ddragon.leagueoflegends.com/realms/' + region + '.json';
const naVersions = await fetchData(versionsUrl);
//example item url (note version# in path) http://ddragon.leagueoflegends.com/cdn/13.18.1/data/en_US/item.json
const itemsUrl =
	'https://ddragon.leagueoflegends.com/cdn/' + naVersions.n.item + '/data/en_US/item.json';

const itemsData = await fetchData(itemsUrl)
const maps = await fetchData(mapsUrl)

async function fetchData(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}