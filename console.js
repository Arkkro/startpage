var term = document.getElementById("consoleinput");
var log = document.getElementById("log");
var user = document.getElementById("user");
var mainbox = document.getElementById("main1");
var initLog = log;
var userList = [];


user = user.value = ">";
// term.value = ">"
function addLog() {
    // var commandLog = user.value + term.value + "<br>";
    if (command != "clear") {
        log.innerHTML = log.innerHTML + commandLog;
        // alert("anything, doesn't matter");
    }
}
// function ex
// function readCookie() {
//   document.cookie
// }

function execCommand() {
    // console.log(term.value);
    if (command == "clear") {
        log.innerHTML = "";
    } else if (command == "programList") {
        commandLog = user + " " + "help" + "<br>" + user + " " + "clear" + "<br>"
    } else if (command == "plp") {
        window.open("https://app.mysummitps.org");
        commandLog = user + " " + command + "<br>"
    } else if (command == "youtube") {
        window.open("https://youtube.com");
        commandLog = user + " " + command + "<br>"

    } else if (command == "tumblr") {
        window.open("https://tumblr.com/dashboard")
        commandLog = user + " " + command + "<br>"
    } else if (command == "dA") {
        window.open("https://deviantart.com")
        commandLog = user + " " + command + "<br>"
    } else if (command == "ic") {
        window.open("https://boards.4chan.org/ic/")
        commandLog = user + " " + command + "<br>"
    } else if (command == "commandName") {
        window.open("link")
        commandLog = user + " " + command + "<br>"
    }
    // else if (command = "commandName") {
    //   window.open("link")
    //   commandLog = user + " " + command + "<br>"
    // }

    // else if (command == "addUser") {
    //   userList = document.cookie;
    //   userList.push(command)
    //   document.cookie = + "userList[];"
    // }
    // else if (command == "listUsers") {
    //   console.log(userList)
    // }
    else {
        commandLog = user + " " + command + " is not defined" + "<br>";
        console.log(commandLog);
    }
}
term.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 13) {
            command = term.value;
            execCommand();
            addLog();
            term.value = "";
        }
    })
    // consoletext.innerHTML =
