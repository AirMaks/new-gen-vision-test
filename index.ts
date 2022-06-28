function between(
  x: number | null,
  y: number | null,
  min: number | null,
  max: number | null
): boolean {
  // if user inputs nothing return all courses
  if (x === null && y === null) return true;

  // if course doesn't have prices don not show this course
  if (min === null && max === null) return false;

  // if user search price from
  if (y === null && max === null) return x >= min;
  if (y === null && min === null) return x <= max;
  if (y === null && max !== null) return x <= max && (x >= min || x <= max);

  // if user search price to
  if (x === null) return y >= min;

  return (max === null && y >= min) || (max !== null && x <= max && y >= min);
}

interface ICourses {
  name: string;
  prices: (number | null)[];
}

// Список курсов
let courses: ICourses[] = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [501, null] },
  { name: "Courses in Italy", prices: [400, null] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [501, 1000] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] }
];

let requiredRange: (number | null)[] = [null, 300];
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [501, null];
export default function filter(
  courses: ICourses[],
  pricesArr: (number | null)[]
): ICourses[] {
  let filteredResult: ICourses[] = [];
  courses.forEach(function (course) {
    if (
      between(pricesArr[0], pricesArr[1], course.prices[0], course.prices[1])
    ) {
      filteredResult.push(course);
    }
  });
  return filteredResult;
}


