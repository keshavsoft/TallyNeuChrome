// import xmlsNeededJson from '../../../../../../../../../FromTally/xmlsNeeded.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalUrl = "Tally/xml/SelectCompany/Transactions/Sales/BatchDate.xml";

    // let jVarLocalUrl = xmlsNeededJson.Transactions.Sales.BatchDate;

    let jVarLocalResponse = await fetch(jVarLocalUrl);
    let jVarLocalData = await jVarLocalResponse.text();
    let jVarLocalFromDate = jFLocalFromDateId();
    let jVarLocalToDate = jFLocalToDateId();
    let jVarLocalCompanyName = jFLocalSelectCompanyId();
    
    let jVarLocalChangeFromDate = jVarLocalData.replace("KeshavSoft_FromDate", jVarLocalFromDate.split("-").reverse().join("-"));
    let jVarLocalChangeToDate = jVarLocalChangeFromDate.replace("KeshavSoft_ToDate", jVarLocalToDate.split("-").reverse().join("-"));
    // console.log("lllllllll : ", jVarLocalFromDate, jVarLocalToDate, jVarLocalChangeToDate);
    let jVarLocalAfterReplace = jVarLocalChangeToDate.replace("KeshavSoft_CompanyName", jVarLocalCompanyName);

    return jVarLocalAfterReplace;
};

let jFLocalToDateId = () => {
    let jVarLocalToDateId = 'ToDateId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalToDateId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalFromDateId = () => {
    let jVarLocalFromDateId = 'FromDateId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFromDateId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalSelectCompanyId = () => {
    let jVarLocalSelectCompanyId = 'SelectCompanyId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalSelectCompanyId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };