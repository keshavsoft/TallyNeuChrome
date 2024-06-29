import { StartFunc as MastersLiId } from "./MastersLiId/EntryFile.js";
import { StartFunc as Items } from "./Items/EntryFile.js";
import { StartFunc as Ledgers } from "./Ledgers/EntryFile.js";

let StartFunc = () => {
    MastersLiId();

    Items();
    Ledgers();
};

export { StartFunc };