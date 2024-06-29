import { StartFunc as MastersItemsLiId } from "./MastersItemsLiId/EntryFile.js";
import { StartFunc as MastersItemsBackLiId } from "./MastersItemsBackLiId/EntryFile.js";

import { StartFunc as HtmlLi } from "./HtmlLi/EntryFile.js";

let StartFunc = () => {
    MastersItemsLiId();
    MastersItemsBackLiId();

    HtmlLi();
};

export { StartFunc };