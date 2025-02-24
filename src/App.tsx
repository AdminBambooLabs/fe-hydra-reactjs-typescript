import Router from "./routes";
import { GlobalStyles } from "./styles/globalStyles";
import { themes } from "./styles/themes";
import { ThemeProvider } from "styled-components";

import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";

function App() {
  return (
    <ThemeProvider theme={themes.white}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
