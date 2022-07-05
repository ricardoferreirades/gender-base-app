export type GenderTypes = "male" | "female" | "non-binary";

export interface IFormControls {
  name: string;
  gender: GenderTypes;
  "favorite-singer": string;
  "favorite-book": string;
  "favorite-sport": string;
}
