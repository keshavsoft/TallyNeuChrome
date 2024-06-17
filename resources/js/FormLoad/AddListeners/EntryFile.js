import { StartFunc as StartFuncItemsId } from "./ItemsId/EntryFile.js";
import { StartFunc as StartFuncAccountsId } from "./AccountsId/EntryFile.js";
import { StartFunc as StartFuncStockCategoryId } from "./StockCategoryId/EntryFile.js";
import { StartFunc as StartFuncStockGroupsId } from "./StockGroupsId/EntryFile.js";
import { StartFunc as StartFuncSendId } from "./SendId/EntryFile.js";
import { StartFunc as StartFuncSalesId } from "./SalesId/EntryFile.js";
import { StartFunc as StartFuncTransactionsLiId } from "./TransactionsLiId/EntryFile.js";
import { StartFunc as StartFuncTransactions } from "./Transactions/EntryFile.js";

let StartFunc = () => {
    StartFuncItemsId();
    StartFuncAccountsId();
    StartFuncStockCategoryId();
    StartFuncStockGroupsId();
    StartFuncSendId();
    StartFuncSalesId();
    StartFuncTransactionsLiId();
    StartFuncTransactions();
};

export { StartFunc };