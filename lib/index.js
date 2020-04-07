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

module.exports = {
  DISTRICT_FIELDS,
  getDistricts,
  getDistrictByAGS,
  getDistrictByNUC,
};
