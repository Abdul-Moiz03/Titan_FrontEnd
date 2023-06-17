import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import HandymanIcon from "@mui/icons-material/Handyman";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import PieChartIcon from "@mui/icons-material/PieChart";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsIcon from "@mui/icons-material/Settings";

export const logo = "https://i.ibb.co/s9Qys2j/logo.png";

export const categories = [
  { id: 1, name: "Search", icon: <SearchIcon />, path: "seacrch" },
  // { name: 'JS Mastery', icon: <CodeIcon />, },
  { id: 2, name: "Home", icon: <HomeIcon />, path: "/" },

  {
    id: 3,
    name: "Maintenance",
    icon: <HandymanIcon />,
    path: "/maintenance",
    subCategories: [
      { id: 1, title: "Work Request", pathh: "/maintenance/workrequest" },
      { id: 2, title: "Work Order", pathh: "/maintenance/workorder" },
      { id: 3, title: "Work Procedure", pathh: "/maintenance/workprocedure" },
      { id: 4, title: "Work Methods", pathh: "/maintenance/workmethod" },
    ],
  },

  {
    id: 4,
    name: "Asset",
    icon: <WebAssetIcon />,
    path: "/asset",
    subCategories: [
      { id: 1, title: "Asset Model", pathh: "/Asset/Asset_Model" },
      { id: 2, title: "Asset", pathh: "/Asset/Assets" },
    ]
  },

  {
    id: 5,
    name: "Preventive",
    icon: <ManageHistoryIcon />,
    subCategories: [
      {
        id: 1,
        title: "Maintenance Model",
        pathh: "/Preventive/Maintenance_Model",
      },
      {
        id: 2,
        title: "Preventive Maintenance",
        pathh: "/Preventive/Preventive_Maintenance",
      },
      {
        id: 3,
        title: "Batch Inspection Entries",
        pathh: "/Preventive/Batch_Inspection_Entries",
      },
    ],
    path: "/preventive",
  },

  { id: 6, name: "Report", icon: <PieChartIcon />, path: "/report" },
  {
    id: 7,
    name: "Inventory",
    icon: <ViewCarouselIcon />,
    path: "/inventory",
    subCategories: [
      { id: 1, title: "Equipment", pathh: "/Inventory/Equipment" },
      { id: 2, title: "UOM", pathh: "/Inventory/uom" },
      { id: 3, title: "Brand", pathh: "/Inventory/brand" },
      {
        id: 4,
        title: "Purchase Requisition",
        pathh: "/Inventory/purchaseRequisition",
      },
      {
        id: 5,
        title: "Issuance Requisition",
        pathh: "/Inventory/issuanceRequisition",
      },
      { id: 6, title: "Issuance Detail", pathh: "/Inventory/issuanceDetail" },
    ],
  },
  {
    id: 8,
    name: "Admin",
    icon: <SecurityIcon />,
    subCategories: [
      { id: 1, title: "User", pathh: "/AdminScreens/Users" },
      { id: 2, title: "Role", pathh: "/AdminScreens/Roles" },
      { id: 3, title: "Permission", pathh: "/AdminScreens/Permission" },
      { id: 4, title: "Profile", pathh: "/AdminScreens/Profile" },
    ],
    path: "/admin",
  },
  { id: 9, name: "Settings", icon: <SettingsIcon />,
      subCategories: [
        { id: 1, title: "Department", pathh: "/Settings/Dept_Setting" },
        { id: 2, title: "Employee", pathh: "/Settings/Emp_Setting" },
        { id: 3, title: "Facility", pathh: "/Settings/Facility_Setting" },
        { id: 4, title: "Floor", pathh: "/Settings/Floor_Setting" },
        { id: 5, title: "Functional Location", pathh: "/Settings/Func_Loc_Setting" },
        { id: 5, title: "Position", pathh: "/Settings/Position_Setting" },
        { id: 6, title: "Tool", pathh: "/Settings/Tool_Setting" },
        { id: 7, title: "Method Type", pathh: "/Settings/Method_Setting" },
        { id: 8, title: "Maintenance Type", pathh: "/Settings/Maintenance_Setting" },
        { id: 9, title: "Priority", pathh: "/Settings/Priority_Setting" },
        { id: 10, title: "Type of Problem", pathh: "/Settings/Problem_Setting" },
        { id: 10, title: "Calendar Setting", pathh: "/Settings/Calendar_Setting" },
      ],
    path: "/settings" },
];
