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
    const coursePriceTo = course.prices[1] ?? Infinity;

    const from = prices[0] ?? 0;
    const to = prices[1] ?? Infinity;

    if (coursePriceFrom === 0 && coursePriceTo === Infinity) return null;

    return (
      (from === coursePriceFrom && from <= coursePriceFrom) ||
      (from <= coursePriceTo && to >= coursePriceFrom)
    );
  });
}

