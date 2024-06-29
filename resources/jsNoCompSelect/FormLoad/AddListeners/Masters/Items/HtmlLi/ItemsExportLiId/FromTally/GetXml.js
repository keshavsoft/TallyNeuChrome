import xmlsNeededJson from '../../../../../../../FromTally/xmlsNeeded.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalUrl = xmlsNeededJson.Masters.Items.ItemsSimple;

    let jVarLocalResponse = await fetch(jVarLocalUrl);
    let jVarLocalData = await jVarLocalResponse.text();

    return jVarLocalData;
};

export { StartFunc };