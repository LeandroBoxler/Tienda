import React from "react";
import { Home } from "./components/home";
import { Detail } from "./components/detail";
import { Register } from "./components/register";
import { Login } from "./components/login";

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
