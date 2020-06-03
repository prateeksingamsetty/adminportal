export class Recipe {
  _id: string;
  name: string;
  ingredients: string[];
  steps: string[]
  tags: string[];
  timeToCook: Number; // number of minutes.
}
