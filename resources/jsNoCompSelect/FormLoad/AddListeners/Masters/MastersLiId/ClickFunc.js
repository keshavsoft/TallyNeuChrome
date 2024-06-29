let StartFunc = async () => {
    let jVarLocalMastersHeaderId = document.getElementById('MainUlId');
    jVarLocalMastersHeaderId.style.display = "none";

    let jVarLocalTransactionsHeaderId = document.getElementById('MastersUlId');
    jVarLocalTransactionsHeaderId.style.display = "";
};

export { StartFunc };