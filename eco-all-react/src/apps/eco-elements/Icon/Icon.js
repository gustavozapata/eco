import React from "react";
import Arrow from "./Icons/Arrow";
import Cart from "./Icons/Cart";
import Link from "./Icons/Link";
import Folder from "./Icons/Folder/Folder";
import "./Icon.css";

const Icon = ({ name, ...rest }) => {
  const renderIcon = (name) => {
    const icons = {
      arrow: Arrow,
      cart: Cart,
      folder: Folder,
      link: Link,
    };
    var IconComponent = icons[name];
    return <IconComponent {...rest} />;
  };

  return <span className="Icon">{renderIcon(name)}</span>;
};

export default Icon;
