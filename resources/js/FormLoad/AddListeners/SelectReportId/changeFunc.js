let StartFunc = (event) => {
    const jVarLocalCurrentTarget = event.currentTarget;
    const jVarLocalSelectValue = jVarLocalCurrentTarget.value;
    console.log("jVarLocalCurrentTarget : ", jVarLocalCurrentTarget, jVarLocalSelectValue);
    switch (jVarLocalSelectValue) {
        case "ItemCategories":
            console.log("item selected");

            break;
        default:

            break;
    };
};

export { StartFunc };