import React from 'react';
import './box.css';
import ScreensCustomizableBox from '../../customizable/box/box';

const ScreensMainBox = () => {
  return( React.createElement("div", { key: (() => Math.round(Math.random() * 10000))(), className: "container"}, ScreensCustomizableBox() ));
}

export default ScreensMainBox;
