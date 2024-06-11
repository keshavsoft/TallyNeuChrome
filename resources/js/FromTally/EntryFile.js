let StartFunc = async () => {

    let jVarLocalXml = await jFLocalGetXml();
    console.log("jVarLocalXml : ", jVarLocalXml);
    await FromTally({ inXml: jVarLocalXml });
};

let FromTally = async ({ inXml }) => {
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/xml',
            'Content-Type': 'text/xml',
        },
        body: inXml
    };

    let r2 = await fetch("http://localhost:9000/", config);
    let d2 = await r2.text();
    // console.log("jVarLocalData /; ", d2);
    document.getElementById("HeadId").innerHTML = d2;
};

let jFLocalGetXml = async () => {
    let jVarLocalUrl = "items.xml";

    let jVarLocalResponse = await fetch(jVarLocalUrl);
    let jVarLocalData = await jVarLocalResponse.text();
    return jVarLocalData;

};

StartFunc().then();