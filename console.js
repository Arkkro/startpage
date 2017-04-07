var term = document.getElementById("consoleinput");
var termbox = document.getElementById("consoleinputbox");
var log = document.getElementById("log");
var user = document.getElementById("user");
var mainbox = document.getElementById("main1");
var initLog = log;
var brCount = 0;
programList = ["help", "clear", "ls", "plp", "amazon", "tumblr", "dA", "/ic/"];

// var userList = [];


user = user.value = ">";
// term.value = ">"
function addLog() {
    // var commandLog = user.value + term.value + "<br>";
    if (command != "clear") {
        log.innerHTML = log.innerHTML + commandLog;
        // alert("anything, doesn't matter");
        term.value = "";
    }
}

function scaleTerm() {
    var scale = (brCount - 7) * 19;
    console.log(scale);
    log.style.height = (168 + scale);
    main1.style.height = (221 + scale);

    if (command == "clear") {
        log.style.height = (168);
        main1.style.height = (221);
    }
}
// function ex
// function readCookie() {
//   document.cookie
// }

function execCommand() {
    if (command == "") {
        commandLog = user + "<br>"
        brCount = brCount + 1;
    } else if (command == "clear") {
        log.innerHTML = "";
        brCount = 0;
    } else if (command == "ls") {
        // commandLog = user + " " + "help" + "<br>" + user + " " + "clear" + "<br>"
        commandLog = "";
        for (var i = 0; i < programList.length; i++) {
            var commandLogAdd = user + " " + "\"" + programList[i] + "\"" + "<br>"
            commandLog = commandLog + commandLogAdd;
        }
        brCount = brCount + programList.length;
    } else if (command == "help") {
        commandLog = user + " " + "Use the command \"ls\" to list all commands" + "<br>" + user + " Use the command \"login (username)\" to set the user" + "<br>";
        brCount = brCount + 2;
    } else if (command.includes("login")) {
        user = "[" + command.slice(6) + "@startpage]$";
        console.log(command);
        loggedIn = true;
        commandLog = user + "<br>";
        brCount = brCount + 1;

    } else if (command == "plp") {
        window.open("https://app.mysummitps.org");
        commandLog = user + " " + command + "<br>"
        brCount = brCount + 1;
    } else if (command == "amazon") {
        window.open("https://www.amazon.com");
        commandLog = user + " " + command + "<br>"
        brCount = brCount + 1;
    } else if (command == "youtube") {
        window.open("https://youtube.com");
        commandLog = user + " " + command + "<br>"
        brCount = brCount + 1;
    } else if (command == "tumblr") {
        window.open("https://tumblr.com/dashboard")
        commandLog = user + " " + command + "<br>"
        brCount = brCount + 1;
    } else if (command == "dA") {
        window.open("https://deviantart.com")
        commandLog = user + " " + command + "<br>"
        brCount = brCount + 1;
    } else if (command == "ic") {
        window.open("https://boards.4chan.org/ic/")
        commandLog = user + " " + command + "<br>"
        brCount = brCount + 1;
    } else if (command == "howto") {
        window.open(howto.html)
        commandLog = user + " " + command + "<br>"
        brCount = brCount + 1;
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
            if (brCount >= 7 || command == "clear") {
                scaleTerm();
                // alert("test");
            }
            term.value = "";
        }
    })
    // consoletext.innerHTML =
