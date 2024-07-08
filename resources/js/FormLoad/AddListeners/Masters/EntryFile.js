import { StartFunc as MastersLiId } from "./MastersLiId/EntryFile.js";
import { StartFunc as Items } from "./Items/EntryFile.js";
import { StartFunc as Ledgers } from "./Ledgers/EntryFile.js";
import { StartFunc as MastersBackLiId } from "./MastersBackLiId/EntryFile.js";
let StartFunc = () => {
  
    MastersLiId();

    Items();
    Ledgers();
    MastersBackLiId();
};

export { StartFunc };