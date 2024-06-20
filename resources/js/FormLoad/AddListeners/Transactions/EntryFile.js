import { StartFunc as StartFuncSalesWithBatchesId } from "./SalesWithBatchesId/EntryFile.js";
import { StartFunc as TranSalesAId } from "./TranSalesAId/EntryFile.js";
import { StartFunc as Sales } from "./Sales/EntryFile.js";

let StartFunc = () => {
    StartFuncSalesWithBatchesId();
    TranSalesAId();
    Sales();
};

export { StartFunc };