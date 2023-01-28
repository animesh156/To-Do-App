var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function darkmode() {
    var element=document.body;
    element.classList.toggle("dark-mode");
}
function Time() {
  // Creating object of the Date class
  var date = new Date();
  // Get current hour
  var hour = date.getHours();
  // Get current minute
  var minute = date.getMinutes();
  // Get current second
 
  // Variable to store AM / PM
  var period = "";
  // Assigning AM / PM according to the current hour
  
  if (hour >= 12) {
  period = "PM";
  } else {
  period = "AM";
  }
  // Converting the hour in 12-hour format
  if (hour == 0) {
  hour = 12;
  } else {
  if (hour > 12) {
  hour = hour - 12;
  }
  }
  // Updating hour, minute, and second
  // if they are less than 10
  hour = update(hour);
  minute = update(minute);
  
  document.getElementById("digital-clock").innerText = hour + " : " + minute + " "  + period ;
  
  // Set Timer to 1 sec (1000 ms)
  setTimeout(Time, 1000);
 }
  // Function to update time elements if they are less than 10
  // Append 0 before time elements if they are less than 10
 function update(t) {
  if (t < 10) {
  return "0" + t;
  }
  else {
  return t;
  }


 }
 Time();

 
const g = new Date().toDateString();
document.getElementById("date").innerHTML = g;
 
