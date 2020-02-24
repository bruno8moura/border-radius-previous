import React from 'react';
import './box.css';
import supermarioimg from './img/Super_Mario_World.jpg'
import BorderRadiusImage from '../../../utils/BorderRadiusImage';
import BorderRadiusValues from '../../../utils/BorderRadiusValues';
import Utils from '../../../utils/Utils';
import Popup from '../../../utils/Popup';

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

const divRadiousInfo = ({id, className, content}) => {
    let properties = {
        className,
        id
    };

    return ( React.createElement("div", properties, content) );
}

const buttonCopy = ({className, innerHTML, type, onClick}) => {
    let properties = {
        className, 
        type,
        onClick
    };
    return ( React.createElement("button", properties, innerHTML) );
}

const customizableBox = (props) => {
    let borderRadiusValues = new BorderRadiusValues('borderradiusinfo');
    const onChange = (event) => {
        let borderRadiusConfig = new BorderRadiusImage("imagebackground", event.target);
        borderRadiusConfig.changeBorderRadius();
        
        borderRadiusValues[event.target.id] = borderRadiusConfig.borderRadiusValue;
        borderRadiusValues.update();
    };

    const onClick = (event) => {
        Utils.copyTextFromANodeHTML('borderradiusinfo');
        Popup.exibirMensagem(`Copied >> ${borderRadiusValues.toString} <<`);
    };

    let boxElements = [
                      borderRadiousRegulator({key: (() => Math.round(Math.random() * 10000))(), className: "borderTopLeftRadius", id:"borderTopLeftRadius", onChange })
                    , borderRadiousRegulator({key: (() => Math.round(Math.random() * 10000))(), className: "borderTopRightRadius", id:"borderTopRightRadius", onChange })
                    , borderRadiousRegulator({key: (() => Math.round(Math.random() * 10000))(), className: "borderBottomLeftRadius", id:"borderBottomLeftRadius", onChange })
                    , borderRadiousRegulator({key: (() => Math.round(Math.random() * 10000))(), className: "borderBottomRightRadius", id:"borderBottomRightRadius", onChange })
                    , img({src: supermarioimg, className: "imagebackground"})
                    , buttonCopy({className: "button-copy", innerHTML: "Copy Border Radius", type: "button", onClick: onClick})
                    , divRadiousInfo({ id: "borderradiusinfo", className: "div-txtImg", content:  borderRadiusValues.toString})
                ];
              
    let divBox = React.createElement("div", {key: (() => Math.round(Math.random() * 10000))(), className: "box"}, boxElements);

    return( divBox );
}

export default customizableBox;