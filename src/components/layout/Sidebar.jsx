import React, { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { categories } from "../../assets/constants";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
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

import "./Sidebar.css";
import { ContentCutOutlined } from "@mui/icons-material";
import Navbar from "./Navbar";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  /**code for sub opening sub catagories on click */
  const [openCategories, setOpenCategories] = useState([]);
  const [cateClick, setcateClick] = useState(false);

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

  return (
    <>
      <div className="container">
        <div
          style={{
            width: isOpen ? "256px" : "70px",
            marginLeft: "4px",
            marginRight: "2px",
          }}
          className="sidebar"
        >
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
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
                    if (item?.subCategories && item?.subCategories.length > 0) {
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
            <Avatar
              className="avatar"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <div
              style={{
                display: isOpen ? "block" : "none",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontFamily: "Manrope", fontWeight: "bold", fontSize: 13 }}
              >
                John Doe
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontFamily: "Manrope", fontSize: 10 }}
              >
                john.doe@example.com
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

        <Stack className="pages">
          <Paper
            sx={{ px: 3, py: 3, mb: 3, borderRadius: 0.5 }}
            children={
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                {/* <main>{children}</main> */}

                <div className="right_navbar">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: "Manrope",
                      fontSize: 14,
                      fontWeight: "bold",
                      mx: 2,
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
                      color: "#FBB515",
                    }}
                  >
                    Admin
                  </Typography>{" "}
                  <Divider orientation="vertical" flexItem />
                  <NotificationAddIcon sx={{ mx: 2 }}></NotificationAddIcon>
                </div>
                <Stack>
                  {/* <LogoutButton onClickHandle={logoutHandle} /> */}
                </Stack>
              </Stack>
            }
          />
          {children}
        </Stack>
      </div>
    </>
  );
};

export default Sidebar;
