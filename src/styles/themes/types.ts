export type ThemesOptions = "dark" | "white";

export type ITheme = {
  colors: Colors;
};

export interface Colors {
  primary: string;
  background: string;
}
