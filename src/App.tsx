import React from "react"
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./styles/theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Topbar from "./components/layout/Topbar";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Contacts from "./pages/Contacts";
import Invoices from "./pages/Invoices";
import Profile from "./pages/Profile";
import Bar from "./pages/Bar";
import Pie from "./pages/Pie";
import Line from "./pages/Line";
import FAQ from "./pages/FAQ";
import Geography from "./pages/Geography";
import Calendar from "./pages/Calendar";

const App = () => {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/team" element={<Team />}/>
                <Route path="/contacts" element={<Contacts />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/invoices" element={<Invoices />}/>
                <Route path="/bar" element={<Bar />}/>
                <Route path="/pie" element={<Pie />}/>
                <Route path="/line" element={<Line />}/>
                <Route path="/faq" element={<FAQ />}/>
                <Route path="/geography" element={<Geography />}/>
                <Route path="/calendar" element={<Calendar />}/>
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
