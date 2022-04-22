import NavItem from "../../components/NavItem/NavItem";

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const navigationItems = [
  {
    title: "Изучить своих коллег",
    url: "/colleague",
  },
  {
    title: "Пройти тест с вариантами ответа",
    url: "/questions",
  },
  {
    title: "Пройти тест Да-Нет",
    url: "/questions-short",
  },
];

const Home = () => {
  return (
    <div className="container-sm">
      {navigationItems.map((item) => (
        <NavItem {...item} />
      ))}      
    </div>
  );
};
export default Home;
