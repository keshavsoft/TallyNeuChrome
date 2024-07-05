import ColumnsJson from '../../../columns.json' with {type: 'json'};

const CommonParentTagName = "SALES";

const StartFunc = ({ inXmlFromTally }) => {
    let jVarLocalItemsXml = inXmlFromTally;
    let ReturnArray = [];

    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(jVarLocalItemsXml.replaceAll("&#4;", ""), "text/xml");

        let checkboxes = doc.documentElement.querySelectorAll(CommonParentTagName);

        checkboxes.forEach(userItem => {
            let LoopInsideObject = {};

            let k1 = jFLocalLoopColumns({ inTemplateControl: userItem });

            LoopInsideObject = { ...k1 };

            ReturnArray.push(LoopInsideObject);
        });

    } catch (error) {
        console.log("error : ", error);
    };

    return ReturnArray;
};

let jFLocalLoopColumns = ({ inTemplateControl }) => {
    let LoopReturnObject = {};
    let LocalTemplateControl = inTemplateControl;

    ColumnsJson.forEach(element => {
        let LoopInsideObject = jFLocalReturnValue({
            inKeyName: element.tagName,
            inValueName: element.field, inTemplateControl: LocalTemplateControl
        });

        LoopReturnObject = {
            ...LoopReturnObject,
            ...LoopInsideObject
        };
    });

    return LoopReturnObject;
};

let jFLocalReturnValue = ({ inKeyName, inValueName, inTemplateControl }) => {
    let LocalTagName = inKeyName;
    let LocalTemplateControl = inTemplateControl;

    let jVarLocalFindTags = LocalTemplateControl.querySelectorAll(LocalTagName);
    let LoopReturnObject = {};

    if (jVarLocalFindTags.length === 1) {
        LoopReturnObject[inValueName] = jVarLocalFindTags[0].innerHTML;
    };

    if (jVarLocalFindTags.length > 1) {
        // console.log("jVarLocalFindTags  : ", jVarLocalFindTags);
        LoopReturnObject[inValueName] = [];

        jVarLocalFindTags.forEach(element => {
            let LoopInsidebBatches = element.innerHTML.split("\n");
            let LoopEachBatchItem = {};

            LoopInsidebBatches.forEach(LoopBatchItem => {

                if (LoopBatchItem.search("BATCHITEM") >= 0) {
                    LoopEachBatchItem.BatchItem = LoopBatchItem.replace("<BATCHITEM>", "").replace("</BATCHITEM>", "").trim();
                };
                if (LoopBatchItem.search("BATCHNAME") >= 0) {
                    LoopEachBatchItem.BatchName = LoopBatchItem.replace("<BATCHNAME>", "").replace("</BATCHNAME>", "").trim();
                };
                if (LoopBatchItem.search("BATCHQTY") >= 0) {
                    LoopEachBatchItem.BatchQty = LoopBatchItem.replace("<BATCHQTY>", "").replace("</BATCHQTY>", "").trim();
                };
                if (LoopBatchItem.search("BATCHRATE") >= 0) {
                    LoopEachBatchItem.BatchRate = LoopBatchItem.replace("<BATCHRATE>", "").replace("</BATCHRATE>", "").trim();
                };

                if (LoopBatchItem.search("BATCHAMOUNT") >= 0) {
                    LoopEachBatchItem.BatchAmount = LoopBatchItem.replace("<BATCHAMOUNT>", "").replace("</BATCHAMOUNT>", "").trim();
                };
            });

            LoopReturnObject[inValueName].push(LoopEachBatchItem);
        });
    };

    return LoopReturnObject;
};

export { StartFunc };