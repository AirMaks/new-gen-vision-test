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


