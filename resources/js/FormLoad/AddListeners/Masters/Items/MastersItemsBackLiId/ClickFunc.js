let StartFunc = async () => {
    let jVarLocalMastersHeaderId = document.getElementById('MastersItemsUlId');
    jVarLocalMastersHeaderId.style.display = "none";

    let jVarLocalTransactionsHeaderId = document.getElementById('MastersUlId');
    jVarLocalTransactionsHeaderId.style.display = "";
};

export { StartFunc };