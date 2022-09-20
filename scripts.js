console.log("Hello! How are you?")


// edit profile button

var editProfile = document.querySelector("#username");

function edit() {
    editProfile.innerText = "New Name";
    console.log("I have a new name.")
}

// connection requests

var requests = document.querySelector("#requests");
var connections = document.querySelector("#connections");

function accept(request) {
    var element=document.querySelector(request);
    element.remove();
    requests.innerText --;
    connections.innerText ++;
    console.log("Friend added")
}

function decline(request) {
    var element=document.querySelector(request);
    element.remove();
    requests.innerText --;
    connections.innerText ++;
    console.log("Friend declined")
}