const jVarCommonTallyUrl = "http://localhost:9000/";

let StartFunc = async () => {
    let jVarLocalTallyStatus = await FromTally();
    let jVarLocalMastersSvgId = document.getElementById('MastersSvgId');

    if (jVarLocalTallyStatus) {
        jFLocalDisplayShowImageWifiId();
        
        jVarLocalMastersSvgId.classList.remove("text-danger");
        jVarLocalMastersSvgId.classList.add("text-success");
        return;
    };

    jVarLocalMastersSvgId.classList.remove("text-success");
    jVarLocalMastersSvgId.classList.add("text-danger");
};

let FromTally = async () => {
    let jVarLocalTallyUrl = jVarCommonTallyUrl;

    try {
        let jVarLocalResponse = await fetch(jVarLocalTallyUrl);

        if (jVarLocalResponse.status === 200) {
            return await true;
        };
    } catch (error) {
        return await false;
    };
};

let jFLocalDisplayShowImageWifiId = () => {
    let jVarLocalHtmlId = 'ImageWifiId';
    let jVarLocalImageWifiId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalImageWifiId === null === false) {
        jVarLocalImageWifiId.style.display = '';
    };
};

export { StartFunc };