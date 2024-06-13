import { StartFunc as StartFuncItemsId } from "./ItemsId/EntryFile.js";
import { StartFunc as StartFuncAccountsId } from "./AccountsId/EntryFile.js";
import { StartFunc as StartFuncStockCategoryId } from "./StockCategoryId/EntryFile.js";
import { StartFunc as StartFuncStockGroupsId } from "./StockGroupsId/EntryFile.js";

let StartFunc = () => {
    StartFuncItemsId();
    StartFuncAccountsId();
    StartFuncStockCategoryId();
    StartFuncStockGroupsId();
};

export { StartFunc };