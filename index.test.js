import filter from "./index.ts";

let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [501, null] },
  { name: "Courses in Italy", prices: [400, null] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [501, 1000] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in Romania", prices: [1001, null] },
  { name: "Courses in Japan", prices: [1001, 2000] },
  { name: "Courses in France", prices: [null, null] }
];

let requiredRange = [null, 300];
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [501, null];
let requiredRange4 = [0, 100];
let requiredRange5 = [501, 1001];

test("it is equal", () => {
  expect(filter(courses, requiredRange)).toStrictEqual([
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] }
  ]);

  expect(filter(courses, requiredRange1)).toStrictEqual([
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] }
  ]);

  expect(filter(courses, requiredRange2)).toStrictEqual([
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] }
  ]);

  expect(filter(courses, requiredRange3)).toStrictEqual([
    { name: "Courses in Germany", prices: [501, null] },
    { name: "Courses in Italy", prices: [400, null] },
    { name: "Courses in China", prices: [501, 1000] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Japan", prices: [1001, 2000] }
  ]);

  expect(filter(courses, requiredRange3)).toStrictEqual([
    { name: "Courses in Germany", prices: [501, null] },
    { name: "Courses in Italy", prices: [400, null] },
    { name: "Courses in China", prices: [501, 1000] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Japan", prices: [1001, 2000] }
  ]);

  expect(filter(courses, requiredRange4)).toStrictEqual([
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in Kazakhstan", prices: [56, 324] }
  ]);

  expect(filter(courses, requiredRange5)).toStrictEqual([
    { name: "Courses in Germany", prices: [501, null] },
    { name: "Courses in Italy", prices: [400, null] },
    { name: "Courses in China", prices: [501, 1000] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Romania", prices: [1001, null] },
    { name: "Courses in Japan", prices: [1001, 2000] }
  ]);
});
