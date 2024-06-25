import { StartFunc as StartFuncBuildMsgContainer } from "./BuildMsgContainer.js";
import { StartFunc as StartFuncNewMsg } from "./NewMsg.js";

let existingUser = [];

let StartFunc = (inData) => {

    if (existingUser.includes(inData.fromId)===false) {
        let lenthOfArray = existingUser.length;
        StartFuncBuildMsgContainer({inData:inData,len : lenthOfArray});
        existingUser.push(inData.fromId);
    }
    StartFuncNewMsg(inData);
};

export { StartFunc };