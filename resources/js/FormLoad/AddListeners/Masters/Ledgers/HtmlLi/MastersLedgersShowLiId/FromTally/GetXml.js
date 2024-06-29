// import xmlsNeededJson from '../../../../../../../FromTally/xmlsNeeded.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalUrl = "Tally/xml/SelectCompany/Masters/Ledgers/Simple.xml";

    let jVarLocalResponse = await fetch(jVarLocalUrl);
    let jVarLocalData = await jVarLocalResponse.text();

    return jVarLocalData;
};

export { StartFunc };