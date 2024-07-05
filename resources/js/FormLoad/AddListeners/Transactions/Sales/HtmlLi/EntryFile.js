import { StartFunc as TranSalesWithBatchDateLiId } from "./TranSalesWithBatchDateLiId/EntryFile.js";
import { StartFunc as TranSalesWithBatLiId } from "./TranSalesWithBatLiId/EntryFile.js";
import { StartFunc as TranSalesExportLiId } from "./TranSalesExportLiId/EntryFile.js";
import { StartFunc as TranSalesBatchWiseLiId } from "./TranSalesBatchWiseLiId/EntryFile.js";

let StartFunc = () => {
    TranSalesWithBatchDateLiId();
    TranSalesWithBatLiId();
    TranSalesExportLiId();
    TranSalesBatchWiseLiId();
};

export { StartFunc };