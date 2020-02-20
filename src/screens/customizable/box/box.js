import React from 'react';
import './box.css';
import supermarioimg from './img/Super_Mario_World.jpg'

const borderRadiousRegulator = ({className, id}) => {
    let properties = {
        type: "range",
        min: "0",
        max: "300",
        defaultValue: "0",
        className,
        id
    };

    return( React.createElement("input", properties, null));
}

const img = ({src, className}) => {
    let properties = {
        src,
        className
    };

    return( React.createElement("img", properties, null) );
}

const customizableBox = (props) => {
    let elements = [
                    borderRadiousRegulator({className: "topLeftRegulator", id:"topLeftRegulator"}),
                    borderRadiousRegulator({className: "topRightRegulator", id:"topRightRegulator"}),
                    borderRadiousRegulator({className: "bottomLeftRegulator", id:"bottomLeftRegulator"}),
                    borderRadiousRegulator({className: "bottomRightRegulator", id:"bottomRightRegulator"}),
                    img({src: supermarioimg, className: "imagebackground"})
                ];
                
    return( React.createElement("div", {className: "box"}, elements) );
}

export default customizableBox;