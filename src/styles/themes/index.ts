import { DefaultTheme } from "styled-components";
import { ThemesOptions } from "./types";
import darkTheme from "./dark.json";
import whiteTheme from "./white.json";

export * from "./types";

export const themes: Record<ThemesOptions, DefaultTheme> = {
  dark: darkTheme,
  white: whiteTheme,
};
