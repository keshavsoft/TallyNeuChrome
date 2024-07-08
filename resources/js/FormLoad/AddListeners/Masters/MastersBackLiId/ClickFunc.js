let StartFunc = async () => {
    
    let jVarLocalMastersHeaderId = document.getElementById('MastersUlId');
    jVarLocalMastersHeaderId.style.display = "none";

    let jVarLocalTransactionsHeaderId = document.getElementById('MainUlId');
    jVarLocalTransactionsHeaderId.style.display = "";
};

export { StartFunc };