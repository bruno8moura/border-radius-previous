import React from 'react';
import './box.css';
import ScreensCustomizableBox from '../../customizable/box/box';

const ScreensMainBox = () => {
  return( React.createElement("div", { className: "container"}, ScreensCustomizableBox() ));
}

export default ScreensMainBox;
