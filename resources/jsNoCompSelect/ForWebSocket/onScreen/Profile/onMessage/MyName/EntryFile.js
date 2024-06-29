import { StartFunc as StartFuncjFLocalToInputUserNameId } from "./jFLocalToInputUserNameId.js";

let StartFunc = (inJsonData) => {
    let jVarLocalData = inJsonData;
    // console.log("jVarLocalData : ", jVarLocalData);
    if (jVarLocalData.fromId === localStorage.getItem('webSocketId')) {
        StartFuncjFLocalToInputUserNameId(jVarLocalData.Message);
    }
    else {
        jFLocalShowUserName({ inJsonData: jVarLocalData });
    }
};

let jFLocalShowUserName = ({ inJsonData }) => {
    let inUserName = inJsonData.Message;
    let inId = inJsonData.fromId;
    let jVarLocalDiv = document.getElementById(inId);
    console.log("jVarLocalDiv : ", jVarLocalDiv);
    jVarLocalDiv.closest(".card").querySelector(".fromNameClass").innerHTML = inUserName;
};

export { StartFunc };