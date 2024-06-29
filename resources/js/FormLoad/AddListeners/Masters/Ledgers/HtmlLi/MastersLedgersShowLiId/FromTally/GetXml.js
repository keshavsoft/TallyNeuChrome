// import xmlsNeededJson from '../../../../../../../FromTally/xmlsNeeded.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalUrl = "Tally/xml/SelectCompany/Masters/Ledgers/Simple.xml";

    let jVarLocalResponse = await fetch(jVarLocalUrl);
    let jVarLocalData = await jVarLocalResponse.text();
    
    let jVarLocalAfterReplace = jVarLocalData.replace("KeshavSoft_CompanyName", "KeshavSoft");

    return jVarLocalAfterReplace;
};

export { StartFunc };