import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import Career from "./components/Career/Career";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyles } from "./globalStyles";
import Contact from "./components/Contact/Contact";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const handleToggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
      <Home />
      <Career />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
