function setNickname(nickname) {
    document.getElementById("nickname").value = nickname;
    document.cookie = "nickname=" + nickname;
}
function getNickname() {
    var nickname = document.cookie.replace(/(?:(?:^|.*;\s*)nickname\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (!nickname) {
        nickname = "Anonymous" + Math.floor(Math.random() * 10000);
        setNickname(nickname);
    }
    return nickname;
}
function sendMessage() {
    var nickname = getNickname();
    var message = document.getElementById("message").value;
    if (message.startsWith("/nick ")) {
        var newNickname = message.substring(6);
        setNickname(newNickname);
        message = "*** " + nickname + " changed their nickname to " + newNickname + " ***";
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "index.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("nickname=" + nickname + "&message=" + message);
    document.getElementById("message").value = "";
    return false;
}
function updateChat() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var chatElement = document.getElementById("chat");
            var shouldScroll = chatElement.scrollTop + chatElement.clientHeight === chatElement.scrollHeight;
            chatElement.innerHTML = this.responseText;
            if (shouldScroll) {
                chatElement.scrollTop = chatElement.scrollHeight;
            }
        }
    };
    xhr.open("GET", "chat.txt", true);
    xhr.send();
}
setInterval(updateChat, 1000);