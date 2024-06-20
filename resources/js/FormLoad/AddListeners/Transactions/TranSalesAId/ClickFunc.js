let StartFunc = async () => {
    let jVarLocalMastersHeaderId = document.getElementById('TransactionsHeaderId');
    jVarLocalMastersHeaderId.style.display = "none";

    let jVarLocalTransactionsHeaderId = document.getElementById('TranSalesHeaderId');
    jVarLocalTransactionsHeaderId.style.display = "";
};

export { StartFunc };