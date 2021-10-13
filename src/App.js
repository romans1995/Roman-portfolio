import React, { useState } from "react";
import ButtonAppBar from "./Ui/ButtonAppBar";
import { ThemeProvider } from "@material-ui/core";
import { createTheme  } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';



function App() {

  const [theme, setTheme] = useState(true);
  const appliedTheme = createTheme (theme ? light : dark);

  const changeTheme = () => {
    setTheme(!theme);
  }
  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <ButtonAppBar theme={appliedTheme.palette.type} changeTheme={changeTheme}/>
        </header>
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
