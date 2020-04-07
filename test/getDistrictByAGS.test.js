const { DISTRICT_FIELDS, getDistrictByAGS } = require("../lib/");

describe("getDistrictByAGS", () => {
  test("getDistrictByAGS is function", () => {
    expect(typeof getDistrictByAGS).toEqual("function");
  });

  test('getDistrictByAGS("09162")', () => {
    const district = getDistrictByAGS("09162");
    expect(district).toBeTruthy();
    expect(district.name).toEqual("München, Landeshauptstadt");
  });

  test("getDistrictByAGS(9162)", () => {
    const district = getDistrictByAGS(9162);
    expect(district).toBeTruthy();
    expect(district.name).toEqual("München, Landeshauptstadt");
  });

  test("getDistrictByAGS(123)", () => {
    const district = getDistrictByAGS(123);
    expect(district).toBeFalsy();
  });

  test("getDistrictByAGS has all required fields", () => {
    const district = getDistrictByAGS("09563");
    for (let field of DISTRICT_FIELDS) {
      expect(district[field]).toBeTruthy();
    }
  });
});
