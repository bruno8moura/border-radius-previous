class BorderRadius {

    constructor( className, inputRange){
        this._className = className;
        this._inputRange = inputRange;
    }

    changeBorderRadius(){        
        document.getElementsByClassName(this._className)[0].style[this._inputRange.id] = this._inputRange.value + 'px';
    }

    _topRight(value) {
        /* let div = document.getElementsByClassName(this._className)[0];
        let divcss = window.getComputedStyle(div);
        alert(divcss.getPropertyValue('border-radius')); */
        
        document.getElementsByClassName(this._className)[0].style.borderTopRightRadius = value + 'px';
    }

    _topLeft(value) {
        document.getElementsByClassName(this._className)[0].style.borderTopLeftRadius = value + 'px';       
    }

    _bottomRight(value) {
        document.getElementsByClassName(this._className)[0].style.borderBottomRightRadius = value + 'px';       
    }

    _bottomLeft(value) {
        document.getElementsByClassName(this._className)[0].style.borderBottomLeftRadius = value + 'px';       
    }    
}

export default BorderRadius;