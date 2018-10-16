import { Comic } from "./comic";
import { Series } from "./series";

export class Character {
  public id: number;
  public name: string;
  public description: string;
  public comics: Comic[];
  public series: Series[];
}
