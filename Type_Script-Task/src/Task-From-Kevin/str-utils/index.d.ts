import type { strFunction } from "./index.ts";
declare module "str-utils" {
  export const strReverse: strFunction;
  export const strToLower: strFunction;
  export const strToUpper: strFunction;
  export const strRandomize: strFunction;
  export const strInvertCase: strFunction;
}
