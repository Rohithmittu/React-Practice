import LightDarkMode from "../Light-Dark-Mode";
import TicTacToe from "../Tic-Tac-Toe";
import RandomColor from "../Random-color";
import TreeView from "../nested-menu";
import menus from "../nested-menu/data";

import Accordian from "../Accordion";
import { useContext } from "react";
import { FeaturedFlagContext } from "./context/index";

export default function FeaturedFlag() {
  const { loading, enabledFlags } = useContext(FeaturedFlagContext);

  const componenetstorender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTictactoeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showrandomcolor",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showtreeVie",
      component: <TreeView menus={menus} />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }
  if (loading) return <h1>Loading</h1>;

  return (
    <div>
      <h1>Featured Flag</h1>
      {componenetstorender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
