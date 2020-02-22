class Utils {

    static copyDataFromAFieldToTransferArea = (elID) => {
        let inputText = document.getElementById(elID);
        inputText.select();

        /*For mobile devices*/
        inputText.setSelectionRange(0, 99999);

        /* Copy the text inside the text field */
        document.execCommand("copy");

        document.getSelection().removeAllRanges();
    }

    static copyTextFromANodeHTML = (elID) => {
        var element = document.getElementById(elID);
        var range = document.createRange();
        range.selectNode(element);
        window.getSelection().addRange(range);
        document.execCommand("copy");
        document.getSelection().removeAllRanges();
    }
}

export default Utils;