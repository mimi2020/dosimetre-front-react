import { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

import Listedesdoses from "./components/ListeDesDose";
// import Listedesdeclarations from "./components/Listesdesdeclarations";
// import Listedesformations from "./components/Listedesformations";
// import Viewdose from "./components/Viewdose";
// import Viewdeclaration from "./components/Viewdeclaration";
// import Viewformation from "./components/Viewformation";
// import Viewuser from "./components/Viewuser";
import ADDuser from "./components/AddUser";
import ADDdose from "./components/AddDose";
// import ADDdeclaration from "./components/ADDdeclaration";
// import ADDformation from "./components/ADDformation";
// import Updatedose from "./components/Updatedose";
import Login from "./components/Login";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/*
               <Routes>
              <Route path="/" element={<Dashboard />} /> */}
          {/* <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/Insaf" element={<Insaf/>} />
              <Route path="/Listedesdoses" element={<Listedesdoses/>} />
              <Route path="/Listedesdeclarations" element={<Listedesdeclarations/>} />
              <Route path="/Listedesformations" element={<Listedesformations/>} />
              <Route path="/Viewuser/:id"  element={<Viewuser/>}              />
              <Route path="/Viewdose/:id"  element={<Viewdose/>}              />
              <Route path="/Viewdeclaration/:id"  element={<Viewdeclaration/>} />
              <Route path="/Viewformation/:id"  element={<Viewformation/>}  />
              <Route path="/ADDdose"  element={<ADDdose/>}  />
              <Route path="/ADDuser"  element={<ADDuser/>}  />
              <Route path="/ADDformation"  element={<ADDformation/>}  />
              <Route path="/ADDdeclaration"  element={<ADDdeclaration/>}  />
              <Route path="/Updatedose/:id"  element={<Updatedose/>}  />
            </Routes>
*/}
          <Routes>
            <Route path="/" element={<Login />}>
            </Route>
              {/* <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} /> */}
                <Route>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/ADDdose"  element={<ADDdose/>}  />
              <Route path="/ADDuser"  element={<ADDuser/>}  />
              {/* <Route path="/Listedesdeclarations" element={<Listedesdeclarations />} />
              <Route path="/Listedesformations" element={<Listedesformations />} />
              <Route path="/Listedesdoses" element={<Listedesdoses/>} /> */}
              <Route path="/team" element={<Team />} />
            </Route>
            {/* </main> */}
          </Routes>
      </div>
    </ThemeProvider>
    </ColorModeContext.Provider >
  );
}
export default App;