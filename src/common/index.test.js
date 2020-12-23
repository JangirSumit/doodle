import { formatDate } from "./index";

describe("common functions", () => {
  it("should return null while calling format Date with null", () => {
    const result = formatDate(null);

    expect(result).toEqual(null);
  });

  it("should return blank while calling format Date with blank", () => {
    const result = formatDate("");

    expect(result).toEqual("");
  });

  it("should throw an error while calling format Date with invalid date", () => {
    const result = formatDate("a");

    expect(result).toEqual("Invalid Date.");
  });

  it("should return a new date while calling format Date with valid date", () => {
    const result = formatDate(new Date());

    expect(result).toEqual("12/23/2020");
  });
});
