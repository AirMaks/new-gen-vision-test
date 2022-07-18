interface ICourses {
  name: string;
  prices: (number | null)[];
}

export default function filter(
  courses: ICourses[],
  prices: (number | null)[]
): ICourses[] {
  return courses.filter((course) => {
    const coursePriceFrom = course.prices[0] ?? 0;
    const coursePriceTo = course.prices[1] ?? Number.MAX_SAFE_INTEGER;

    const from = prices[0] ?? 0;
    const to = prices[1] ?? Number.MAX_SAFE_INTEGER;

    if (coursePriceFrom === 0 && coursePriceTo === Number.MAX_SAFE_INTEGER)
      return null;

    return from <= coursePriceTo && to >= coursePriceFrom;
  });
}


