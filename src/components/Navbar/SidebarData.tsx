import React from "react";

import Search from "../Search/Search";
import Add from "../Add/Add";
import Home from "../Home"

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
  {
    title: "User Name",
    path: "/user",
    icon: <FaIcons.FaUserAlt />,
    cName: "nav-text",
  },
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
    component: <Home />,
  },
  {
    title: "Search",
    path: "/search",
    icon: <FaIcons.FaWarehouse />,
    cName: "nav-text",
    component: <Search />,
  },
  {
    title: "Add",
    path: "/new",
    icon: <AiIcons.AiFillFileAdd />,
    cName: "nav-text",
    component: <Add />,
  },
  {
    title: "Sync",
    path: "/sync",
    icon: <FaIcons.FaSyncAlt />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Log Out",
    path: "/log",
    icon: <AiIcons.AiOutlineLogout />,
    cName: "nav-text",
  },
];
