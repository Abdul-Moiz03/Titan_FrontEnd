import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Maintenance from "./components/pages/Maintenance/Maintenance";
import Asset from "./components/pages/Asset";
import Preventive from "./components/pages/Preventive";

import Report from "./components/pages/Report";

import Inventory from "./components/pages/Inventory";

import Admin from "./components/pages/Admin";

import Settings from "./components/pages/Settings";
import { WrokRequest } from "./components/pages/Maintenance/WrokRequest";
import WorkMethod from "./components/pages/Maintenance/WorkMethod";
import WorkProcedure from "./components/pages/Maintenance/WorkProcedure";
import WorkOrder from "./components/pages/Maintenance/WorkOrder.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        {/* <Navbar> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/maintenance/workrequest" element={<WrokRequest />} />
          <Route path="/maintenance/workorder" element={<WorkOrder />} />

          <Route
            path="/maintenance/workprocedure"
            element={<WorkProcedure />}
          />

          <Route path="/maintenance/workmethod" element={<WorkMethod />} />

          <Route path="/asset" element={<Asset />} />
          <Route path="/preventive" element={<Preventive />} />
          <Route path="/report" element={<Report />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        {/* </Navbar> */}
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
