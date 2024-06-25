import { StartFunc as TranSalesWithBatchDateLiId } from "./TranSalesWithBatchDateLiId/EntryFile.js";
import { StartFunc as TranSalesWithBatLiId } from "./TranSalesWithBatLiId/EntryFile.js";

let StartFunc = () => {
    TranSalesWithBatchDateLiId();
    TranSalesWithBatLiId();
};

export { StartFunc };