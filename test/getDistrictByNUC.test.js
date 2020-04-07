const { DISTRICT_FIELDS, getDistrictByNUC } = require("../lib/");

describe("getDistrictByNUC", () => {
  test("getDistrictByNUC is function", () => {
    expect(typeof getDistrictByNUC).toEqual("function");
  });

  test('getDistrictByNUC("DE502")', () => {
    const district = getDistrictByNUC("DE502");
    expect(district).toBeTruthy();
    expect(district.type).toEqual("Kreisfreie Stadt");
    expect(district.name).toEqual("Bremerhaven, Stadt");
  });

  test('getDistrictByNUC("DE000")', () => {
    const district = getDistrictByNUC("DE000");
    expect(district).toBeFalsy();
  });

  test("getDistrictByNUC has all required fields", () => {
    const district = getDistrictByNUC("DE408");
    for (let field of DISTRICT_FIELDS) {
      expect(district[field]).toBeTruthy();
    }
  });
});
