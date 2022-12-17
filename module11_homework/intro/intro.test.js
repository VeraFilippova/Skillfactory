
const { percents, nativeNull } = require("./intro");

describe("getPercents function:", () => {
  test("should return percents ", () => {
    expect(percents(10, 100)).toBe(10);
  });
  test("should return bool", () => {
    expect(percents(2, 36)).toBeLessThan(11);
    expect(percents(15, 142)).toBeLessThanOrEqual(22);
    expect(percents(4, 47)).not.toBe(null);
  });
});

// describe ('Native null function:', () =>{
//     test('should return false value null', () => {
//         expect(nativeNull()).toBe(null)
//     })
// })
