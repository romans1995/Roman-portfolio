import React, { useState } from "react";
import ButtonAppBar from "./Ui/ButtonAppBar";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import Main from "./Main.js";
import About from "./About";
import CssBaseline from "@material-ui/core/CssBaseline";
import Projects from "./Ui/Projects";
import Footer from "./Footer";

function App() {
  const [theme, setTheme] = useState(true);
  const appliedTheme = createTheme(theme ? light : dark);

  const changeTheme = () => {
    setTheme(!theme);
  };
  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <ButtonAppBar
            theme={appliedTheme.palette.type}
            changeTheme={changeTheme}
          />
        </header>
        <main>
          <Main theme={appliedTheme.palette.type} />
          <About />
          <Projects theme={appliedTheme.palette.type} />
        </main>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <Footer theme={appliedTheme.palette.type}/>
      </div>
    </ThemeProvider>
  );
}
export const light = {
  palette: {
    type: "dark",
  },
};
export const dark = {
  palette: {
    type: "light",
  },
};
export default App;
