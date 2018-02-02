
var curTime = 0;
var myTimeout;
var popupWindow;
var TimeWasSet = false;
var endApp = false;


function setAlarm(age) {
	//only initializes the start time once at the start
	if (TimeWasSet == false) {
		curTime = age;
		TimeWasSet = true;
	}
	//if timer reached zero, display alert
	if (curTime <= 0) {
		window.alert("Please Take a Break and Then Come Back! Thank You!")
		endApp = true;
	}
	popupWindow.updateTime(curTime);
	curTime--;
	if (endApp == false) {
		myTimeout = setTimeout(setAlarm, 1000);
	}
}


function setPopupWindow(obj) {
	popupWindow = obj;
}

function foo() {
	chrome.tabs.executeScript(tab.id, {code: "alert(document.querySelector('body'));"});
}