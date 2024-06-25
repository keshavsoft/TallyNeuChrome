import { StartFunc as MastersItemsLiId } from "./MastersItemsLiId/EntryFile.js";
import { StartFunc as MastersItemsBackLiId } from "./MastersItemsBackLiId/EntryFile.js";
import { StartFunc as ItemsShowLiId } from "./ItemsShowLiId/EntryFile.js";

let StartFunc = () => {
    MastersItemsLiId();
    MastersItemsBackLiId();

    ItemsShowLiId();
};

export { StartFunc };