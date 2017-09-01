function printTime(){
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();

	console.log(seconds);
	var clock = document.getElementById("clock");
	console.log(clock);
	clock.innerHTML = "Pacific Time: " + hours+":"+minutes+":"+seconds;
}

setInterval("printTime()", 1000);