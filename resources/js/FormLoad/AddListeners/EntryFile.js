import { StartFunc as StartFuncItemsId } from "./ItemsId/EntryFile.js";
import { StartFunc as StartFuncAccountsId } from "./AccountsId/EntryFile.js";

let StartFunc = () => {
    StartFuncItemsId();
    StartFuncAccountsId();
};

export { StartFunc };