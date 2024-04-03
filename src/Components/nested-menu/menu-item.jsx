import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  // const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  // function handleToggleChildren(getCurrentlabel) {
  //   setDisplayCurrentChildren({
  //     ...displayCurrentChildren,
  //     [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
  //   });
  // }

  const [displayCurrentChildren, setDisplayCurrentChildren] = useState(false);
  
  function handleToggleChildren() {
    setDisplayCurrentChildren(!displayCurrentChildren);
  }

  // console.log(displayCurrentChildren);

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          // <span onClick={() => handleToggleChildren(item.label)}>
          <span onClick={handleToggleChildren}>
            {/* {displayCurrentChildren[item.label] ? "-" : "+"} */}
            {displayCurrentChildren ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      // displayCurrentChildren[item.label] ? (
      displayCurrentChildren ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
