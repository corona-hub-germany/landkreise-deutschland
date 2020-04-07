const { DISTRICT_FIELDS, getDistricts } = require("../lib/");

describe("getDistricts", () => {
  test("getDistricts is function", () => {
    expect(typeof getDistricts).toEqual("function");
  });

  test("getDistricts returns array", () => {
    const districts = getDistricts();
    expect(Array.isArray(districts)).toBeTruthy();
  });

  test("getDistricts returns 401 districts", () => {
    const districts = getDistricts();
    expect(districts.length).toEqual(401);
  });

  test("district has all required fields", () => {
    const districts = getDistricts();
    const district = districts[0];
    for (let field of DISTRICT_FIELDS) {
      expect(district[field]).toBeTruthy();
    }
  });
});
