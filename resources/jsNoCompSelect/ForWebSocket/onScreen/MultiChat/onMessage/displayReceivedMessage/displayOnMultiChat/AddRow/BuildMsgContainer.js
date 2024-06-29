let StartFunc = ({ inData, len }) => {
    let chatContainer = jFBuildMsgContainer();
    jFAppendMsgContainer({ chatContainer, len, uniqueId :inData.fromId});
    let app = document.getElementById("container");
    app.querySelector(".chatrow").append(chatContainer);
};

let jFBuildMsgContainer = () => {
    let temp = document.getElementById("templateForMultiChatNewUser");
    let temp_content = temp.content;
     return document.importNode(temp_content, true);
}

let jFAppendMsgContainer = ({ chatContainer, len ,uniqueId }) => {
    // let app = document.getElementById("container");
    // app.querySelector(".chatrow").append(copyHTML);
    chatContainer.querySelector(".multi-chat-class").id = uniqueId;
    chatContainer.querySelector(".fromNameClass").innerHTML = uniqueId;


    // document.getElementById("multi-chat-id").id = uniqueId;
    // document.getElementsByClassName("fromNameClass")[len].innerHTML = uniqueId;

}

export { StartFunc };