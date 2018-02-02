
var bgpage = chrome.extension.getBackgroundPage();
var currentTime = 100;

document.addEventListener('DOMContentLoaded', function () {
    load();
    document.querySelector('#start').addEventListener('click', setTimer);
    document.querySelector('#addfont').addEventListener('click', increaseFont);
    document.querySelector('#lessfont').addEventListener('click', decreaseFont);
});



function setTimer() {
	var newURL="http://ohwellconcordia.github.io";
	chrome.tabs.create({ url: newURL});
	var age = document.getElementById("ageID").value;
	bgpage.setAlarm(document.getElementById("ageID").value);
}



function load() {
	bgpage.setPopupWindow(window.self);
}

function updateTime(time) {
	document.getElementById("timerBox").innerHTML = time + " seconds";
}

function increaseFont() {
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//     document.body.style.background="red";
//   });
// });
}

function decreaseFont() {
	bgpage.foo();
	// bgpage.document.body.style.backgroundColor = "red";
}