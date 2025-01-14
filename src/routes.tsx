import React from "react";
import { Home } from "./page/home";
import { Detail } from "./page/detail";
import { Register } from "./page/register";
import { Login } from "./page/login";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

export const routes: RouteConfig[] = [
  { path: "/", element: <Home /> },
  { path: "/detail", element: <Detail /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
];
