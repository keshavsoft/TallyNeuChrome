let StartFunc = async () => {
    let jVarLocalUrl = "Tally/xml/SelectCompany/Masters/Items/simple.xml";

    let jVarLocalResponse = await fetch(jVarLocalUrl);
    let jVarLocalData = await jVarLocalResponse.text();
    let jVarLocalCompanyName = jFLocalSelectCompanyId();

    let jVarLocalAfterReplace = jVarLocalData.replace("KeshavSoft_CompanyName", jVarLocalCompanyName);

    return jVarLocalAfterReplace;
};

let jFLocalSelectCompanyId = () => {
    let jVarLocalSelectCompanyId = 'SelectCompanyId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalSelectCompanyId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };