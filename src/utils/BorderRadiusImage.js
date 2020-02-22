class BorderRadiusImage {

    constructor( className, inputRange){
        this._className = className;
        this._inputRange = inputRange;
    }

    changeBorderRadius(){
        document.getElementsByClassName(this._className)[0].style[this._inputRange.id] = this._inputRange.value + 'px';
    }
    
    get borderRadiusValue() {
        /* let div = document.getElementsByClassName(this._className)[0];
        let divcss = window.getComputedStyle(div);
        alert(divcss.getPropertyValue('border-radius')); */
        let value = '' + document.getElementsByClassName(this._className)[0].style[this._inputRange.id];
        return value;
    }
}

export default BorderRadiusImage;