import { StartFunc as StartFuncSalesWithBatchesId } from "./SalesWithBatchesId/EntryFile.js";
import { StartFunc as TranSalesAId } from "./TranSalesAId/EntryFile.js";
import { StartFunc as Sales } from "./Sales/EntryFile.js";
import { StartFunc as TranBackLiId } from "./TranBackLiId/EntryFile.js";

let StartFunc = () => {
    TranBackLiId();
    StartFuncSalesWithBatchesId();
    TranSalesAId();
    
    Sales();
};

export { StartFunc };