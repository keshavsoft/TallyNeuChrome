import { StartFunc as TranSalesWithBatchDateLiId } from "./TranSalesWithBatchDateLiId/EntryFile.js";
import { StartFunc as TranSalesWithBatLiId } from "./TranSalesWithBatLiId/EntryFile.js";
import { StartFunc as TranSalesExportLiId } from "./TranSalesExportLiId/EntryFile.js";

let StartFunc = () => {
    TranSalesWithBatchDateLiId();
    TranSalesWithBatLiId();
    TranSalesExportLiId();
};

export { StartFunc };