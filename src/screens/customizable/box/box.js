import React from 'react';
import './box.css';

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

const customizableBox = (props) => {
    let inputs = [
                    borderRadiousRegulator({className: "topLeftRegulator", id:"topLeftRegulator"}),
                    borderRadiousRegulator({className: "topRightRegulator", id:"topRightRegulator"}),
                    borderRadiousRegulator({className: "bottomLeftRegulator", id:"bottomLeftRegulator"}),
                    borderRadiousRegulator({className: "bottomRightRegulator", id:"bottomRightRegulator"})
                ];
                
    return( React.createElement("div", {className: "box"}, inputs) );
}

export default customizableBox;