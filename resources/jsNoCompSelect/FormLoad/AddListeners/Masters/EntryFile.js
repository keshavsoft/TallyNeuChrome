import { StartFunc as MastersLiId } from "./MastersLiId/EntryFile.js";
import { StartFunc as Items } from "./Items/EntryFile.js";

let StartFunc = () => {
    MastersLiId();
    
    Items();
};

export { StartFunc };