import M from 'materialize-css';

const Popup = {
    exibirMensagem : ( msg ) => {
        M.toast({html: msg, displayLength: 1000});        
    }
};

export default Popup;