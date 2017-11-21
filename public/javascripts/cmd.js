var chatWindows = document.getElementById("chatWindows");
var cmdInp = document.getElementById("cmdInp");
var containerMessages = document.getElementById("containerMessages");
cmdInp.onkeydown = (key)=>{
    // console.log(key)
    if (key.code == "Enter" || key.key == "Enter") {
        if (cmdInp.value) {
            var data ={
                message: cmdInp.value,
            }
            socket.emit("new message", data);
            cmdInp.value = "";
            addMessageToContainer(data);
            containerMessages.scrollTop = containerMessages.clientHeight;
        }
    }
}
var socket = io('http://localhost/cmd');
socket.on("cmd",(data)=>{
    if (data.message.message == "up chat") {
        chatWindows.className = "cmd-windows cmd-windows-open";
    }
    if (data.message.message == "close chat") {
        chatWindows.className = "cmd-windows cmd-windows-close";
    }
    if (data.message.message != "up chat" && data.message.message != "close chat") {
        addMessageToContainer(data.message);
    }
    
})
function addMessageToContainer(message){
    var ul = document.getElementById("containerMessages");
    var li = document.createElement("li");
        li.innerHTML = message.message;
        ul.appendChild(li);
        ul.scrollIntoView(false);
}