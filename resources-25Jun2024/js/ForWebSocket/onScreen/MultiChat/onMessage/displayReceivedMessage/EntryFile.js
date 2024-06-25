import { StartFunc as StartFuncDisplayOnMultiChat } from "./displayOnMultiChat/EntryFile.js";

let StartFunc = (data) => {
  StartFuncDisplayOnMultiChat({inData: data});
};


export { StartFunc };
