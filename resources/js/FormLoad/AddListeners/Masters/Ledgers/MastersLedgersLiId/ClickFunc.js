let StartFunc = async () => {
    let jVarLocalMastersHeaderId = document.getElementById('MastersUlId');
    jVarLocalMastersHeaderId.style.display = "none";

    let jVarLocalTransactionsHeaderId = document.getElementById('MastersLedgersUlId');
    jVarLocalTransactionsHeaderId.style.display = "";
};

export { StartFunc };