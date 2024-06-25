let StartFunc = (inData) => {
    console.log(inData);

    let jVarCurrentContainer = jFSearchContainer(inData);
    jFAppendNewMsg({inData, jVarCurrentContainer});

};

let jFAppendNewMsg = ({inData,jVarCurrentContainer}) => {

            let receivedMessage = inData.Message;
            let chatContent = document.getElementsByClassName("multi-chat-content")[jVarCurrentContainer];
            const template = document.getElementById("templateMultiChatMsg");
            let chatMessage = template.content.getElementById("chat-message");

            chatMessage.textContent = receivedMessage;
            chatContent.appendChild(template.content.cloneNode(true));

        };

let jFSearchContainer = (inData) => {
    let containers = document.getElementsByClassName("multi-chat-class");

    for (let i = 0; i < containers.length; i++) {
        if (containers[i].id === inData.fromId) {
            return i;
        }
    }
};


export { StartFunc };