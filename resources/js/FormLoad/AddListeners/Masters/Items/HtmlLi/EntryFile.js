import { StartFunc as ItemsShowLiId } from "./ItemsShowLiId/EntryFile.js";
import { StartFunc as ItemsExportLiId } from "./ItemsExportLiId/EntryFile.js";

let StartFunc = () => {
    ItemsShowLiId();
    ItemsExportLiId();
};

export { StartFunc };