import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Home from "./components/pages/Home";
import Maintenance from "./components/pages/Maintenance/Maintenance";
import Asset from "./components/pages/Asset";
import Preventive from "./components/pages/Preventive";
import Report from "./components/pages/Report";
import Inventory from "./components/pages/Inventory/Inventory";
import Admin from "./components/pages/AdminScreens/Admin";
import Settings from "./components/pages/Settings";
import { WrokRequest } from "./components/pages/Maintenance/WrokRequest";
import WorkMethod from "./components/pages/Maintenance/WorkMethod";
import WorkProcedure from "./components/pages/Maintenance/WorkProcedure";
import WorkOrder from "./components/pages/Maintenance/WorkOrder.jsx";
import Equipment from "./components/pages/Inventory/Equipment";
import UOM from "./components/pages/Inventory/UOM";
import Brand from "./components/pages/Inventory/Brand";
import PurchaseRequisition from "./components/pages/Inventory/PurchaseRequisition";
import IssuanceRequisition from "./components/pages/Inventory/IssuanceRequisition";
import IssuanceDetail from "./components/pages/Inventory/IssuanceDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
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
          <Route path="/Inventory/Equipment" element={<Equipment />} />
          <Route path="/Inventory/uom" element={<UOM />} />
          <Route path="/Inventory/brand" element={<Brand />} />
          <Route
            path="/Inventory/purchaseRequisition"
            element={<PurchaseRequisition />}
          />
          <Route
            path="/Inventory/issuanceRequisition"
            element={<IssuanceRequisition />}
          />
          <Route
            path="/Inventory/issuanceDetail"
            element={<IssuanceDetail />}
          />
          <Route path="/admin" element={<Admin />} />

          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
