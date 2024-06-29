let StartFunc = () => {
    let jVarLocalItemsJson = localStorage.getItem("tableArray");

    webSocket.send(jVarLocalItemsJson);
};

export { StartFunc };