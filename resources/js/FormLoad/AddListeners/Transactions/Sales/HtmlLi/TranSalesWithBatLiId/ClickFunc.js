import { StartFunc as StartFuncFromTally } from "./FromTally/EntryFile.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";

let StartFunc = async () => {
    await StartFuncFromTally();

    StartFuncBuildBsTable();
};

export { StartFunc };