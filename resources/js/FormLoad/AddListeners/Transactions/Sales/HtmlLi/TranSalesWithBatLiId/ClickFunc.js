import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as AddListeners } from "./AddListeners/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDatesCard = document.getElementById('DatesCard');
    jVarLocalDatesCard.style.display = "";
    jFLocalHighlight();

    StartFuncBuildBsTable();
    AddListeners();
};

let jFLocalHighlight = () => {
    let jVarLocalHtmlId = "TranSalesWithBatLiId";
    
    document.getElementById(jVarLocalHtmlId).querySelector("svg").setAttribute("height", 30)
    document.getElementById(jVarLocalHtmlId).querySelector("svg").setAttribute("weight", 30);
    document.getElementById(jVarLocalHtmlId).querySelector("svg").classList.remove("text-white");
    document.getElementById(jVarLocalHtmlId).querySelector("svg").classList.add("text-info");
};

export { StartFunc };