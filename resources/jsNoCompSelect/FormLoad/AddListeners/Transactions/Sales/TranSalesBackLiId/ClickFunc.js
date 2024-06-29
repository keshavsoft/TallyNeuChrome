let StartFunc = async () => {
    let jVarLocalMastersHeaderId = document.getElementById('TranSalesUlId');
    jVarLocalMastersHeaderId.style.display = "none";

    let jVarLocalTransactionsHeaderId = document.getElementById('TranUlId');
    jVarLocalTransactionsHeaderId.style.display = "";
};

export { StartFunc };