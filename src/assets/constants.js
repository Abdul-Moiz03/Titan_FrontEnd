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
      { id: 2, title: "Work Methods", pathh: "/maintenance/workmethod" },
    ],
  },

  {
    id: 4,
    name: "Asset",
    icon: <WebAssetIcon />,
    path: "/asset",
  },
  {
    id: 5,
    name: "Preventive",
    icon: <ManageHistoryIcon />,
    path: "/preventive",
  },
  { id: 6, name: "Report", icon: <PieChartIcon />, path: "/report" },
  { id: 7, name: "Inventory", icon: <ViewCarouselIcon />, path: "/inventory" },
  { id: 8, name: "Admin", icon: <SecurityIcon />, path: "/admin" },
  { id: 9, name: "Settings", icon: <SettingsIcon />, path: "/settings" },
];
