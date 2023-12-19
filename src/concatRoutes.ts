import { ensureSlashPrefix } from "./helpers";
import { ParsedRoute } from "./types";

export const addPrefixOnNonEmpty = (value: string, prefix: string) =>
  value === "" ? value : prefix + value;

export const concatRoutes = (
  routeA: ParsedRoute,
  routeB: ParsedRoute,
): string => {
  const fixedPathA = ensureSlashPrefix(routeA["path"]);
  const fixedPathB = ensureSlashPrefix(routeB["path"]);

  const path =
    fixedPathA === "/"
      ? fixedPathB
      : fixedPathB === "/"
        ? fixedPathA
        : fixedPathA + fixedPathB;

  const search =
    routeA["search"] === ""
      ? routeB["search"]
      : routeA["search"] + addPrefixOnNonEmpty(routeB["search"], "&");

  return path + addPrefixOnNonEmpty(search, "?");
};
