import { StartFunc as MastersLedgersShowLiId } from "./MastersLedgersShowLiId/EntryFile.js";
import { StartFunc as MastersLedgersExportLiId } from "./MastersLedgersExportLiId/EntryFile.js";

let StartFunc = () => {
    MastersLedgersShowLiId();
    MastersLedgersExportLiId();
};

export { StartFunc };