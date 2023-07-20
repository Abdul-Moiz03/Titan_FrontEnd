import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Home from "./components/pages/Home";
import Maintenance from "./components/pages/Maintenance/Maintenance";

import Asset from "./components/pages/Asset/Asset";
import Asset_Model from "./components/pages/Asset/Asset_Model";
import Assets from "./components/pages/Asset/Assets";

import Preventive from "./components/pages/Preventive/Preventive";
import Report from "./components/pages/Report";
import Inventory from "./components/pages/Inventory/Inventory";

import Admin from "./components/pages/AdminScreens/Admin";
import Users from "./components/pages/AdminScreens/Users";
import Roles from "./components/pages/AdminScreens/Roles";
import Permission from "./components/pages/AdminScreens/Permission";
import Profile from "./components/pages/AdminScreens/Profile";

import Settings from "./components/pages/Settings/Settings";
import Dept_Setting from "./components/pages/Settings/Dept_Setting";
import Emp_Setting from "./components/pages/Settings/Emp_Setting";
import Facility_Setting from "./components/pages/Settings/Facility_Setting";
import Floor_Setting from "./components/pages/Settings/Floor_Setting";
import Func_Loc_Setting from "./components/pages/Settings/Func_Loc_Setting";
import Position_Setting from "./components/pages/Settings/Position_Setting";
import Tool_Setting from "./components/pages/Settings/Tool_Setting";
import Method_Setting from "./components/pages/Settings/Method_Setting";
import Maintenance_Setting from "./components/pages/Settings/Maintenance_Setting";
import Priority_Setting from "./components/pages/Settings/Priority_Setting";
import Problem_Setting from "./components/pages/Settings/Problem_Setting";
import Calendar_Setting from "./components/pages/Settings/Calendar_Setting";

import WorkRequest from "./components/pages/Maintenance/WorkRequest";
import WorkMethod from "./components/pages/Maintenance/WorkMethod";
import WorkProcedure from "./components/pages/Maintenance/WorkProcedure";
import WorkOrder from "./components/pages/Maintenance/WorkOrder/WorkOrder.jsx";

import Equipment from "./components/pages/Inventory/Equipment";
import UOM from "./components/pages/Inventory/UOM";
import Brand from "./components/pages/Inventory/Brand";
import PurchaseRequisition from "./components/pages/Inventory/PurchaseRequisition";
import IssuanceRequisition from "./components/pages/Inventory/IssuanceRequisition";
import IssuanceDetail from "./components/pages/Inventory/IssuanceDetail";

import Preventive_Maintenance from "./components/pages/Preventive/Preventive_Maintenance";
import Batch_Inspection_Entries from "./components/pages/Preventive/Batch_Inspection_Entries";
import Maintenance_Model from "./components/pages/Preventive/Maintenance_Model";

import SignInSide from "./components/layout/SignInSide";
import SingUp from "./components/layout/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#F5F6F8" }}>
        <Sidebar>
          <Routes>
            <Route path="/SignIn" element={<SignInSide />} />
            <Route path="/SignUp" element={<SingUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/maintenance/workrequest" element={<WorkRequest />} />
            <Route path="/maintenance/workorder" element={<WorkOrder />} />

            <Route
              path="/maintenance/workprocedure"
              element={<WorkProcedure />}
            />

            <Route path="/maintenance/workmethod" element={<WorkMethod />} />

            <Route path="/asset" element={<Asset />} />
            <Route path="/preventive" element={<Preventive />} />
            <Route
              path="/Preventive/Maintenance_Model"
              element={<Maintenance_Model />}
            />
            <Route
              path="/Preventive/Preventive_Maintenance"
              element={<Preventive_Maintenance />}
            />
            <Route
              path="/Preventive/Batch_Inspection_Entries"
              element={<Batch_Inspection_Entries />}
            />

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
            <Route path="/AdminScreens/Users" element={<Users />} />
            <Route path="/AdminScreens/Roles" element={<Roles />} />
            <Route path="/AdminScreens/Permission" element={<Permission />} />
            <Route path="/AdminScreens/Profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/Settings/Dept_Setting" element={<Dept_Setting />} />
            <Route path="/Settings/Emp_Setting" element={<Emp_Setting />} />
            <Route
              path="/Settings/Facility_Setting"
              element={<Facility_Setting />}
            />
            <Route path="/Settings/Floor_Setting" element={<Floor_Setting />} />
            <Route
              path="/Settings/Func_Loc_Setting"
              element={<Func_Loc_Setting />}
            />
            <Route
              path="/Settings/Position_Setting"
              element={<Position_Setting />}
            />
            <Route path="/Settings/Tool_Setting" element={<Tool_Setting />} />
            <Route
              path="/Settings/Method_Setting"
              element={<Method_Setting />}
            />
            <Route
              path="/Settings/Maintenance_Setting"
              element={<Maintenance_Setting />}
            />
            <Route
              path="/Settings/Priority_Setting"
              element={<Priority_Setting />}
            />
            <Route
              path="/Settings/Problem_Setting"
              element={<Problem_Setting />}
            />
            <Route
              path="/Settings/Calendar_Setting"
              element={<Calendar_Setting />}
            />

            <Route path="/asset" element={<Asset />} />
            <Route path="/Asset/Asset_Model" element={<Asset_Model />} />
            <Route path="/Asset/Assets" element={<Assets />} />
          </Routes>
        </Sidebar>
      </div>
    </BrowserRouter>
  );
};

export default App;
