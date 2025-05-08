function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true || toUpper === undefined) {
    const inputResult = input.toUpperCase();
    return inputResult;
  }
  return input.toLowerCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredItem = items?.filter((item) => item.rating >= 4);
  return filteredItem;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result = [];
  for (const array of arrays) {
    result.push(...array);
  }
  return result;
}

class Vehicle {
  constructor(private make: string, private year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value?.length;
  }
  return value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  const productPrice = Math.max(...products?.map((p) => p.price));
  const product = products.find((p) => p.price === productPrice);

  return product || null;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (
    day === Day.Monday ||
    day === Day.Tuesday ||
    day === Day.Wednesday ||
    day === Day.Thursday ||
    day === Day.Friday
  ) {
    return "Weekday";
  }
  return "Weekend";
}

async function squareAsync(n: number): Promise<number> {
  const resultPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      }
      resolve(n * n);
    }, 1000);
  });

  return resultPromise;
}
