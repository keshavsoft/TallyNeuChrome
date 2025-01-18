import { StartFunc as SelectedOptions } from "./SelectedOptions.js";
// import { StartFunc as BuildBsTable } from "./BuildBsTable/EntryFile.js";
// import { StartFunc as StartFuncSalesToExcel } from "../ShowAId/SalesToExcel/ShowInTable/EntryFile.js";
// import { StartFunc as StartFuncSalesToExcel } from "../ShowAId/SalesToExcel/ShowInTable/EntryFile.js";
import { StartFunc as StartFuncTransformAndShow } from "../ShowAId/SalesToExcel/transformAndShow.js";

let StartFunc = () => {
    // debugger;
    const jVarLocalFilterObject = SelectedOptions();

    const jVarLocalFilteredData = _.filter(jVarGlobalPresentViewData, jVarLocalFilterObject);
    console.log("jVarLocalFilteredData : ", jVarLocalFilteredData);
    // StartFuncSalesToExcel({ inDataToShow: jVarLocalFilteredData });
    StartFuncTransformAndShow({ inDataToShow: jVarLocalFilteredData });
    // StartFuncSalesToExcel({ inDataToShow: jVarGlobalPresentViewData });
};

export { StartFunc };