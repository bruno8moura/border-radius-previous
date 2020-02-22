class BorderRadiusValues {
    
    constructor(elID) {
        this._elementID = elID;
        this.borderTopLeftRadius = '0px';
        this.borderTopRightRadius = '0px';
        this.borderBottomLeftRadius = '0px';
        this.borderBottomRightRadius = '0px';
    }

    update(){
        document.getElementById(this._elementID).innerHTML = this.toString;
    }

    get toString() {
        return this.borderTopRightRadius + ' ' + this.borderBottomRightRadius + ' ' + this.borderBottomLeftRadius + ' ' + this.borderTopLeftRadius;
    }
}

export default BorderRadiusValues;