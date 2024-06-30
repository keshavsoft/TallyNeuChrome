let StartFunc = async () => {
    let jVarLocalMastersHeaderId = document.getElementById('MainUlId');
    jVarLocalMastersHeaderId.style.display = "none";

    let jVarLocalTransactionsHeaderId = document.getElementById('MastersUlId');
    jVarLocalTransactionsHeaderId.style.display = "";

    jFLocalToInputMenuNameId("Masters");
};

let jFLocalToInputMenuNameId = (inValue) => {
    let jVarLocalHtmlId = 'MenuNameId';
    let jVarLocalMenuNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalMenuNameId === null === false) {
        jVarLocalMenuNameId.innerHTML = inValue;
    };
};

export { StartFunc };