let bg = chrome.extension.getBackgroundPage();
console.log("hello");
console.log(bg.time_worked);
document.getElementById("time_work_needed").innerHTML =
  String(Math.floor((500 - bg.time_worked) / 60)) +
  String(":") +
  String((500 - bg.time_worked) % 60);
break_time_available =
  24 * 60 -
  new Date().getHours() * 60 -
  new Date().getMinutes() -
  (500 - bg.time_worked);
document.getElementById("break_time_availabled").innerHTML =
  String(Math.floor(break_time_available / 60)) +
  String(":") +
  String(break_time_available % 60);
