function welcome() {
  alert("Welcome to the FORMJS application");
}
function count(e) {
  if (e.keyCode != 8 && e.keyCode != 13) {
    document.getElementById("counter").innerHTML =
      eval(document.getElementById("counter").innerHTML) + 1;
  } else if (
    document.getElementById("counter").innerHTML != 0 &&
    e.keyCode == 8
  )
    document.getElementById("counter").innerHTML =
      eval(document.getElementById("counter").innerHTML) - 1;
  else if (e.keyCode == 13) document.getElementById("txt2").focus();
}
function jump(e) {
  if (e.keyCode == 13) document.getElementById("txt3").focus();
}
function prevent(e) {
  if (e.keyCode == 56) e.preventDefault();
}
function mouseOver(element) {
  element.value = "CityName";
}
function mouseOut(element) {
  element.value = "";
}

setInterval(function () {
  timer();
}, 1000);
function timer() {
  var d = new Date();
  document.getElementById("timer").innerHTML = d.toLocaleString();
}

var students = new Array();
var counter = 0;
function addTeacher() {
  var fname = prompt("Enter your teacher's name:");
  var lname = prompt("Enter your teacher's family name:");
  var lesson = prompt("Enter your lesson's name:");
  var std = { fname: fname, lname: lname, lesson: lesson };
  students[counter++] = std;
}
function showSchedule() {
  var table =
    "<table border='1' width='300'><tr><th>Fist Name</th><th>Last Name</th><th>Lesson's Name</th></tr>";
  for (var i = 0; i < students.length; ++i) {
    table += "<tr>";
    table += "<td>" + students[i].fname + "</td>";
    table += "<td>" + students[i].lname + "</td>";
    table += "<td>" + students[i].lesson + "</td>";
    table += "</tr>";
  }
  table += "</table>";
  document.getElementById("student").innerHTML = table;
}
function change() {
  document.getElementById("change").innerHTML = "You are registered";

  var change = document.getElementById("input").getElementByTagName("input")[7];
  this.repleceChild("submitted", change);
}
function close_win() {
  window.close();
}
