import React, { useEffect, useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { categories } from "../../assets/constants";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import { isJwtExpired } from "jwt-check-expiration";
import {
  Modal,
  Button,
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import {
  Stack,
  Typography,
  SvgIcon,
  MenuItem,
  Divider,
  Paper,
  IconButton,
  Avatar,
} from "@mui/material";

import logo from "../../assets/Images/logo.png";
import logoicon from "../../assets/Images/logoicon.png";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { Api, ContentCutOutlined } from "@mui/icons-material";
import Navbar from "./Navbar";
const Sidebar = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  /**code for sub opening sub catagories on click */
  const [openCategories, setOpenCategories] = useState([]);
  const [cateClick, setcateClick] = useState(false);
  const isSignInOrSignOutPage =
    pathname === "/SignIn" || pathname === "/SignUp";
  console.log(isSignInOrSignOutPage);
  const handleCategoryClick = () => {
    setcateClick(true);
  };
  console.log(openCategories + "fasdf");

  const [hasChild, setHasChild] = useState(false);
  const toggleCategory = (categoryId) => {
    console.log(openCategories);
    if (openCategories.includes(categoryId)) {
      setOpenCategories(openCategories.filter((id) => id !== categoryId));
    } else {
      setOpenCategories([categoryId]);
    }
  };
  // const [sideBarActive, setSideBarActive] = useState(true);

  /**--------------------------------------- */
  let button = isOpen ? (
    <ArrowCircleLeftIcon onClick={toggle} sx={{ fontSize: 40 }} />
  ) : (
    <ArrowCircleRightIcon onClick={toggle} sx={{ fontSize: 40 }} />
  );
  const iconStyle = {
    cursor: "pointer",
    transition: "cursor 0.3s", // Add smooth transition for cursor change
    // Add more styles as needed
    marginLeft: "10px",
    // Style changes on hover
    ":hover": {
      cursor: "hand", // or 'pointer'
    },
  };
  const navigate = useNavigate();
  const ApiLogout = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:81/api/Users/logout", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data == true) {
        localStorage.removeItem("token");
        navigate("/SignIn");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    let timeoutId;

    if (!isSignInOrSignOutPage) {
      // Check if the timeout has already been set
      if (!timeoutId) {
        console.log("This will run after 10 second!");
        timeoutId = setTimeout(() => {
          ApiLogout();
          console.log("runned");
        }, 5 * 60 * 1000);
      }
    }

    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(timeoutId);
    };
  }, [isSignInOrSignOutPage]);

  return (
    <>
      <div className="container">
        {!isSignInOrSignOutPage && (
          <div
            style={{
              // display: isOpen ? "block" : "none",
              width: isOpen ? "256px" : "70px",
              marginLeft: "4px",
              marginRight: "2px",
            }}
            // style={{
            //   width: isOpen ? "256px" : "70px",
            //   marginLeft: "4px",
            //   marginRight: "2px",
            // }}
            className="sidebar"
          >
            <div className="top_section">
              <h1
                style={{ display: isOpen ? "block" : "none" }}
                className="logo"
              >
                <img src={logo} alt="Logo" className="logosize" />
              </h1>
              <div style={{ display: isOpen ? "none" : "block" }}>
                <img src={logoicon} alt="Logo" className="logoiconsize" />
              </div>
            </div>
            {categories.map((item, index) => (
              <>
                <NavLink
                  to={item.path}
                  key={item.id}
                  className="link"
                  activeclassName="active"
                >
                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                    onClick={() => {
                      toggleCategory(item.id);
                      if (
                        item?.subCategories &&
                        item?.subCategories.length > 0
                      ) {
                        setHasChild(true);
                      } else {
                        setHasChild(false);
                      }
                    }}
                  >
                    {item.name}
                  </div>
                </NavLink>
                {console.log(hasChild)}
                {hasChild &&
                  item.subCategories &&
                  openCategories.includes(item.id) && (
                    <ul
                      style={{
                        display: isOpen ? "block" : "none",
                      }}
                    >
                      {item.subCategories.map((subCategory) => (
                        <li
                          key={subCategory.id}
                          style={{ listStyleType: "none" }}
                        >
                          <NavLink
                            key={subCategory.id}
                            to={subCategory.pathh}
                            activeClassName="active_menu"
                            className="link"
                          >
                            <div className="link_text">{subCategory.title}</div>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
              </>
            ))}

            <div className="adminInfo">
              {/* <Avatar className="avatar">A</Avatar> */}
              {/* <Avatar
                className="avatar"
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              /> */}
              <div
                style={{
                  display: isOpen ? "block" : "none",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Manrope",
                    fontWeight: "bold",
                    fontSize: 13,
                  }}
                >
                  Lucky Soap
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontFamily: "Manrope", fontSize: 10 }}
                >
                  LuckySoap@gmail.com
                </Typography>
              </div>
              <div
                className="admin_bar"
                style={{
                  display: isOpen ? "block" : "none",
                }}
              >
                <MenuIcon
                  onClick={toggle}
                  sx={{
                    fontSize: 30,
                  }}
                />
              </div>
            </div>
            <Divider style={{ borderColor: "#FBB515" }} />

            <div className="bottom_sidebar">
              <div
                style={{
                  display: isOpen ? "block" : "none",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Manrope",
                    fontWeight: "bold",
                    fontSize: 13,
                    ml: 3,
                    mt: 1,
                  }}
                >
                  2023 TITAN V1.0
                </Typography>
              </div>
              <div
                style={{
                  marginLeft: isOpen ? "50px" : "11px",
                }}
                className="arrow_sidebar"
              >
                {button}
                {/* <ArrowCircleLeftIcon onClick={toggle} sx={{ fontSize: 40 }}  /> */}
              </div>
            </div>
          </div>
        )}
        {/* NAV BAR CODE */}
        <Stack className="pages">
          {!isSignInOrSignOutPage && (
            <Paper
              sx={{ px: 3, py: 3, mb: 3, borderRadius: 0.5 }}
              children={
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <div className="right_navbar">
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontFamily: "Manrope",
                        fontSize: 14,
                        fontWeight: "bold",
                        mx: 2,
                        mt: 1,
                      }}
                    >
                      Status Will be here
                    </Typography>{" "}
                    <Divider orientation="vertical" flexItem />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontFamily: "Manrope",
                        fontSize: 14,
                        fontWeight: "bold",
                        ml: 2,
                        mt: 1,
                      }}
                    >
                      hi,
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontFamily: "Manrope",
                        fontSize: 14,
                        fontWeight: "bold",
                        mr: 2,
                        ml: 0.5,
                        mt: 1,
                        color: "#FBB515",
                      }}
                    >
                      Admin
                    </Typography>{" "}
                    <Divider orientation="vertical" flexItem />
                    {/* <LogoutIcon
                      onClick={console.log("kya hy bhae")}
                      style={iconStyle}
                    /> */}
                    <Button
                      onClick={ApiLogout}
                      fullWidth={false}
                      variant="contained"
                      // disabled={isSubmitting}
                      sx={{
                        mr: 2,
                        ml: 2,
                        backgroundColor: "#FBB515",
                        color: "black",
                        "&:hover": {
                          backgroundColor: "#FABE4B",
                        },
                      }}
                    >
                      <LogoutIcon />
                    </Button>
                    {/* <Box
                      sx={{
                        display: "flex",
                        justifyContent: "right",
                        alignItems: "center",
                      }}
                    ></Box> */}
                  </div>
                  <Stack></Stack>
                </Stack>
              }
            />
          )}
          {children}
        </Stack>

        {/* <Navbar /> */}
      </div>
    </>
  );
};

export default Sidebar;
