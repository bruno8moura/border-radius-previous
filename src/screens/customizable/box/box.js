import React from 'react';
import './box.css';
import supermarioimg from './img/Super_Mario_World.jpg'
import BorderRadius from '../../../utils/BorderRadius';

const borderRadiousRegulator = ({className, id, onChange}) => {
    let properties = {
        type: "range",
        min: "0",
        max: "300",
        defaultValue: "0",
        className,
        id,
        onChange
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
    const onChange = (event) => {
        let borderRadiusConfig = new BorderRadius("imagebackground", event.target);
        borderRadiusConfig.changeBorderRadius();
    };

    
    let elements = [
                    borderRadiousRegulator({key: (() => Math.round(Math.random() * 10000))(),  className: "borderTopLeftRadius", id:"borderTopLeftRadius", onChange }),
                    borderRadiousRegulator({key: (() => Math.round(Math.random() * 10000))(), className: "borderTopRightRadius", id:"borderTopRightRadius", onChange}),
                    borderRadiousRegulator({key: (() => Math.round(Math.random() * 10000))(), className: "borderBottomLeftRadius", id:"borderBottomLeftRadius", onChange}),
                    borderRadiousRegulator({key: (() => Math.round(Math.random() * 10000))(), className: "borderBottomRightRadius", id:"borderBottomRightRadius", onChange}),
                    img({src: supermarioimg, className: "imagebackground"})
                ];
                
    return( React.createElement("div", {key: (() => Math.round(Math.random() * 10000))(), className: "box"}, elements) );
}

export default customizableBox;