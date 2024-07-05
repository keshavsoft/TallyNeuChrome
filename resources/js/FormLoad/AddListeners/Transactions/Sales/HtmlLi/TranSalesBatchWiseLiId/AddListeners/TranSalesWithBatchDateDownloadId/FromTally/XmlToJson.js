import { StartFunc as HeadWise } from "./HeadWise.js";

const StartFunc = ({ inXmlFromTally }) => {
    let jVarLocalHeadWise = HeadWise({ inXmlFromTally });
    let jVarLocalBatchWiseArray = [];

    jVarLocalHeadWise.forEach(element => {
        if ("BatchDetails" in element) {
            if (Array.isArray(element.BatchDetails)) {
                element.BatchDetails.forEach(LoopBatch => {
                    jVarLocalBatchWiseArray.push({
                        ...element,
                        ...LoopBatch
                    });
                });
            };
        };
    });
    console.log("jVarLocalHeadWise------- : ", jVarLocalBatchWiseArray);
    return jVarLocalBatchWiseArray;
};

export { StartFunc };