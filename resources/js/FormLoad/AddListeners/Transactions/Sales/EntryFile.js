import { StartFunc as TranSalesBackLiId } from "./TranSalesBackLiId/EntryFile.js";
import { StartFunc as HtmlLi } from "./HtmlLi/EntryFile.js";

let StartFunc = () => {
    TranSalesBackLiId();

    HtmlLi();
};

export { StartFunc };