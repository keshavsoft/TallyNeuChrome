// import { StartFunc as MastersItemsLiId } from "./MastersLedgersLiId/EntryFile.js";
import { StartFunc as MastersLedgersLiId } from "./MastersLedgersLiId/EntryFile.js";

import { StartFunc as HtmlLi } from "./HtmlLi/EntryFile.js";

let StartFunc = () => {
    MastersLedgersLiId();
    // MastersItemsLiId();
    // MastersItemsBackLiId();

    HtmlLi();
};

export { StartFunc };