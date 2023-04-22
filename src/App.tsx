import React from "react"
import { ColorModeContext, useMode } from "./styles/theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Topbar from "./components/layout/Topbar";

const App = () => {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <main className="content">
              <Topbar />
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
