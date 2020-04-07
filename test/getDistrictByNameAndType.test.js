const { getDistrictByNameAndType } = require("../lib/");

describe("getDistrictByNameAndType", () => {
  test("getDistrictByNameAndType is function", () => {
    expect(typeof getDistrictByNameAndType).toEqual("function");
  });

  test('getDistrictByNameAndType("Fürth", "Kreisfreie Stadt")', () => {
    const district = getDistrictByNameAndType("Fürth", "Kreisfreie Stadt");
    expect(district).toBeTruthy();
    expect(district.AGS).toEqual("09563");
  });

  test('getDistrictByNameAndType("Fürth", "Stadt")', () => {
    const district = getDistrictByNameAndType("Fürth", "Stadt");
    expect(district).toBeTruthy();
    expect(district.AGS).toEqual("09563");
  });

  test('getDistrictByNameAndType("Fürth", "Landkreis")', () => {
    const district = getDistrictByNameAndType("Fürth", "Landkreis");
    expect(district).toBeTruthy();
    expect(district.AGS).toEqual("09573");
  });

  test('getDistrictByNameAndType("Rheinisch Bergischer Kreis")', () => {
    const district = getDistrictByNameAndType("Rheinisch Bergischer Kreis");
    expect(district).toBeTruthy();
    expect(district.AGS).toEqual("05378");
  });

  test('getDistrictByNameAndType("München", "Kreisfreie Stadt")', () => {
    const district = getDistrictByNameAndType("München", "Kreisfreie Stadt");
    expect(district).toBeTruthy();
    expect(district.AGS).toEqual("09162");
  });

  test('getDistrictByNameAndType("Potsdamt", "Stadt")', () => {
    const district = getDistrictByNameAndType("Potsdam", "Stadt");
    expect(district).toBeTruthy();
    expect(String(district.AGS)).toEqual("12054");
  });

  test('getDistrictByNameAndType("Potsdam, Stadt")', () => {
    const district = getDistrictByNameAndType("Potsdam, Stadt");
    expect(district).toBeTruthy();
    expect(String(district.AGS)).toEqual("12054");
  });

  test('getDistrictByNameAndType("Ulm", "Stadt")', () => {
    const district = getDistrictByNameAndType("Ulm", "Stadt");
    expect(district).toBeTruthy();
    expect(String(district.AGS)).toEqual("08421");
  });
  

  test('getDistrictByNameAndType("New York")', () => {
    const district = getDistrictByNameAndType("New York");
    expect(district).toBeFalsy();
  });
});
