let StartFunc = async () => {
    let jVarLocalMastersHeaderId = document.getElementById('TranUlId');
    jVarLocalMastersHeaderId.style.display = "none";

    let jVarLocalTransactionsHeaderId = document.getElementById('MainUlId');
    jVarLocalTransactionsHeaderId.style.display = "";
};

export { StartFunc };