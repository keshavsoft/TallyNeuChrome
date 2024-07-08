import { StartFunc as XmlToJson } from "./XmlToJson.js";
import { StartFunc as FromTally } from "./FromTally.js";

let StartFunc = async () => {
    let jVarLocalTallyStatus = await FromTally();

    if (jVarLocalTallyStatus.status === 200) {
        let jVarLocalJson = XmlToJson({ inXmlFromTally: jVarLocalTallyStatus.text() });

        jFLocalToSelect({ inJsonArray: jVarLocalJson });
    };
};

let jFLocalToSelect = ({ inJsonArray }) => {
    let jVarLocalSelectCompanyId = document.getElementById('SelectCompanyId');

    jVarLocalSelectCompanyId.innerHTML = "";

    inJsonArray.forEach(option =>
        jVarLocalSelectCompanyId.options.add(
            new Option(option.CompanyName, option.CompanyName)
        )
    );
};

export { StartFunc };