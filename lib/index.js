const stringSimilarity = require("string-similarity");

const districts = require("../data/districts.json");

const DISTRICT_FIELDS = [
  "AGS",
  "type",
  "name",
  "NUTS3",
  "area_km2",
  "population",
  "population_male",
  "population_female",
  "population_per_km2",
];

function getDistricts() {
  return districts;
}

function getDistrictByAGS(ags) {
  return districts.find((d) => String(d.AGS).endsWith(String(ags)));
}

function getDistrictByNUC(nuc) {
  return districts.find((d) =>
    String(d.NUTS3).endsWith(String(nuc).toUpperCase())
  );
}

function getDistrictByNameAndType(name, type) {
	type = type ? type.toUpperCase() : null;

	var allNames;
	if (type) {
		allNames = districts.filter((d) => (d.type.toUpperCase().includes(type))).map(d => d.name);
	} else {
		allNames = districts.map(d => d.name);
	}

	if (!allNames || !allNames.length) {
		return null;
	}

	const matches = stringSimilarity.findBestMatch(name, allNames);
	const bestMatch = matches.bestMatch.target;
	const rating = matches.bestMatch.rating;
	if (rating <= 0.4) {
		//console.debug(`Low rating: ${rating} (${bestMatch})`);
		return null;
	}

	if (type) {
		return districts.find((d) => d.name === bestMatch && (d.type.toUpperCase().includes(type)));
	} else {
		return districts.find((d) => d.name === bestMatch);
	}
}

module.exports = {
  DISTRICT_FIELDS,
  getDistricts,
  getDistrictByAGS,
	getDistrictByNUC,
	getDistrictByNameAndType
};
