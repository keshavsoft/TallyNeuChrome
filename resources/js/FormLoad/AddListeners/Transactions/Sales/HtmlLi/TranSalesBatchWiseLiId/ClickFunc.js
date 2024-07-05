import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as AddListeners } from "./AddListeners/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDatesCard = document.getElementById('DatesCard');
    jVarLocalDatesCard.style.display = "";

    StartFuncBuildBsTable();
    AddListeners();
};

export { StartFunc };