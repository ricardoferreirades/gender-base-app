export type GenderTypes = "male" | "female" | "non-binary";

export interface IFormControls {
  id?: number;
  name: string;
  gender: GenderTypes;
  "favorite-singer": string;
  "favorite-book": string;
  "favorite-sport": string;
}
