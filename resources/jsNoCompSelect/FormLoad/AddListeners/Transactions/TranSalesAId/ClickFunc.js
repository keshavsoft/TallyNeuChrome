let StartFunc = async () => {
    let jVarLocalMastersHeaderId = document.getElementById('TranUlId');
    jVarLocalMastersHeaderId.style.display = "none";

    let jVarLocalTransactionsHeaderId = document.getElementById('TranSalesUlId');
    jVarLocalTransactionsHeaderId.style.display = "";

    jFLocalToInputMenuNameId("Transactions-Sales");
};

let jFLocalToInputMenuNameId = (inValue) => {
    let jVarLocalHtmlId = 'MenuNameId';
    let jVarLocalMenuNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalMenuNameId === null === false) {
        jVarLocalMenuNameId.innerHTML = inValue;
    };
};

export { StartFunc };