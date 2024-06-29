// import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";

let StartFunc = (index, row, $detail) => {
    // let jVarLocalDataArray = row.AggValues.ItemsArray;
    // let jVarLocalTemplateForSubTable = document.getElementById("TemplateForItemNames");
    // let clone = jVarLocalTemplateForSubTable.content.cloneNode("true");
    // const s = new XMLSerializer();
    // const str = s.serializeToString(clone);

    let jVarLocalInsideTable = $detail.html("<table></table>").find('table');
    console.log("row : ", row);
    jVarLocalInsideTable.bootstrapTable({
        data: [],
        columns: [{
            title: "SubTable"
        }],
        detailView: true
    });
};

export { StartFunc };