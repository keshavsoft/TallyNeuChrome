import { StartFunc as showControls } from "./showControls.js";
import { StartFunc as hideControls } from "./hideControls.js";

let StartFunc = (event) => {
    const jVarLocalCurrentTarget = event.currentTarget;
    const jVarLocalSelectValue = jVarLocalCurrentTarget.value;

    showControls();

    switch (jVarLocalSelectValue) {
        case "ItemCategories":
        case "ItemGroups":
            hideControls();

            break;
        default:

            break;
    };
};

let jFLocalToInputPeriodColId = () => {
    let jVarLocalHtmlId = 'PeriodColId';
    let jVarLocalPeriodColId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalPeriodColId === null === false) {
        jVarLocalPeriodColId.style.display = "none";
    };
};

let Show = () => {
    let jVarLocalHtmlId = 'PeriodColId';
    let jVarLocalPeriodColId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalPeriodColId === null === false) {
        jVarLocalPeriodColId.style.display = '';
    };
};

export { StartFunc };